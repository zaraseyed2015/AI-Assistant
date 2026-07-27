import { useState } from "react";

import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";
import type { ChatMessage } from "../types/chat.types";

export default function ChatPage() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "Hello! I'm your AI Assistant. How can I help you today?",
            createdAt: new Date(),
        },
    ]);

    function handleSend(content: string) {
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

    return (
        <div className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900">
            <ChatHeader />

            <ChatMessages messages={messages} />

            <ChatInput onSend={handleSend} />
        </div>
    );
}