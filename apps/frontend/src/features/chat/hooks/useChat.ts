import { useState } from "react";

import type { ChatMessage } from "../types/chat.types";

import { sendChatMessage } from "../services/chat.service";

export function useChat() {

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "Hello! I'm your AI Assistant. How can I help you today?",
            createdAt: new Date(),
        },
    ]);

    const [isLoading, setIsLoading] = useState(false);

    async function sendMessage(content: string) {

        if (!content.trim() || isLoading) {
            return;
        }

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content,
            createdAt: new Date(),
        };

        // Update the UI immediately
        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setIsLoading(true);

        try {

            // Build the complete conversation
            const conversation = [
                ...messages,
                userMessage,
            ].map((message) => ({
                role: message.role,
                content: message.content,
            }));

            const response = await sendChatMessage(
                conversation,
            );

            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response.data.content,
                createdAt: new Date(),
            };

            setMessages((previous) => [
                ...previous,
                assistantMessage,
            ]);

        } catch {

            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content:
                    "Sorry, I couldn't reach the AI service. Please try again.",
                createdAt: new Date(),
            };

            setMessages((previous) => [
                ...previous,
                assistantMessage,
            ]);

        } finally {

            setIsLoading(false);

        }
    }

    return {
        messages,
        sendMessage,
        isLoading,
    };

}