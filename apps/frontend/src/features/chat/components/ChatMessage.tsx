import type { ChatMessage as ChatMessageType } from "../types/chat.types";

interface ChatMessageProps {
    message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex w-full ${isUser ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`flex max-w-3xl items-start gap-3 ${isUser ? "flex-row-reverse" : ""
                    }`}
            >
                {/* Avatar */}

                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold ${isUser
                            ? "bg-blue-600 text-white"
                            : "bg-slate-700 text-slate-100"
                        }`}
                >
                    {isUser ? "👤" : "🤖"}
                </div>

                {/* Bubble */}

                <div
                    className={`rounded-2xl px-5 py-4 shadow-md ${isUser
                            ? "bg-blue-600 text-white"
                            : "border border-slate-700 bg-slate-800 text-slate-100"
                        }`}
                >
                    <p className="whitespace-pre-wrap leading-7">
                        {message.content}
                    </p>
                </div>
            </div>
        </div>
    );
}