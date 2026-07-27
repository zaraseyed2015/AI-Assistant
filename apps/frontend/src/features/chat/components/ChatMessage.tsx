import type { ChatMessage as ChatMessageType } from "../types/chat.types";

interface Props {
    message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`max-w-2xl rounded-xl px-4 py-3 ${isUser
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-100"
                    }`}
            >
                {message.content}
            </div>
        </div>
    );
}