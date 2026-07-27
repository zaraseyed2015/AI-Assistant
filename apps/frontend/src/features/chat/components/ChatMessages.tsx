import ChatMessage from "./ChatMessage";
import type { ChatMessage as ChatMessageType } from "../types/chat.types";

interface Props {
    messages: ChatMessageType[];
}

export default function ChatMessages({ messages }: Props) {
    return (
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((message) => (
                <ChatMessage
                    key={message.id}
                    message={message}
                />
            ))}
        </div>
    );
}