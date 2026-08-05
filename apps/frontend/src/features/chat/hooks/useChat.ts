import { useState } from "react";

import type { ChatMessage } from "../types/chat.types";

import {
    streamChatMessage,
} from "../services/chat.service";

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

        if (!content.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content,
            createdAt: new Date(),
        };

        const assistantId =
            crypto.randomUUID();

        const assistantMessage: ChatMessage = {
            id: assistantId,
            role: "assistant",
            content: "",
            createdAt: new Date(),
        };

        const conversation = [
            ...messages,
            userMessage,
        ].map(({ role, content }) => ({
            role,
            content,
        }));

        setMessages((previous) => [
            ...previous,
            userMessage,
            assistantMessage,
        ]);

        setIsLoading(true);

        try {

            await streamChatMessage(
                conversation,
                (chunk) => {

                    setMessages((previous) =>
                        previous.map((message) =>

                            message.id === assistantId
                                ? {
                                    ...message,
                                    content:
                                        message.content +
                                        chunk,
                                }
                                : message,
                        ),
                    );

                },
            );

        } catch {

            setMessages((previous) =>
                previous.map((message) =>

                    message.id === assistantId
                        ? {
                            ...message,
                            content:
                                "Sorry, I couldn't reach the AI service.",
                        }
                        : message,
                ),
            );

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