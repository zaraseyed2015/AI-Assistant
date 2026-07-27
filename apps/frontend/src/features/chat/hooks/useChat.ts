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

    function sendMessage(content: string) {
        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content,
            createdAt: new Date(),
        };

        setMessages((previous) => [...previous, userMessage]);

        setTimeout(() => {
            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content:
                    "This is a mock response. In the next sprint I'll be connected to our backend.",
                createdAt: new Date(),
            };

            setMessages((previous) => [...previous, assistantMessage]);
        }, 500);
    }

    return {
        messages,
        sendMessage,
    };
}