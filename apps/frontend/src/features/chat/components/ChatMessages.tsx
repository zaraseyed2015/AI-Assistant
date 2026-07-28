import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import ThinkingIndicator from "./ThinkingIndicator";

import type { ChatMessage as ChatMessageType } from "../types/chat.types";

interface ChatMessagesProps {
    messages: ChatMessageType[];
    isLoading: boolean;
}

export default function ChatMessages({
    messages,
    isLoading,
}: ChatMessagesProps) {

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-6">

            <div className="space-y-6">

                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                    />
                ))}

                {isLoading && (
                    <ThinkingIndicator />
                )}

                <div ref={bottomRef} />

            </div>

        </div>
    );
}