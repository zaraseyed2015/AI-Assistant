import { useState } from "react";

import type { ChatMessage } from "../types/chat.types";

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

        if (!content.trim()) return;

        if (isLoading) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content,
            createdAt: new Date(),
        };

        setMessages(previous => [...previous, userMessage]);

        setIsLoading(true);

        //
        // Temporary delay
        // Later this becomes:
        //
        // const response = await chatService.sendMessage(...)
        //

        await new Promise(resolve => setTimeout(resolve, 1500));

        const assistantMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
                "This is a mock AI response. Soon this will come from the OpenAI API.",
            createdAt: new Date(),
        };

        setMessages(previous => [...previous, assistantMessage]);

        setIsLoading(false);
    }

    return {
        messages,
        sendMessage,
        isLoading,
    };
}