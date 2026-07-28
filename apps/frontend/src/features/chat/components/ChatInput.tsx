import { useState } from "react";

interface ChatInputProps {
    onSend(message: string): void;
    isLoading: boolean;
}

export default function ChatInput({
    onSend,
    isLoading,
}: ChatInputProps) {

    const [message, setMessage] = useState("");

    function handleSend() {
        const trimmed = message.trim();

        if (!trimmed) return;

        if (isLoading) return;

        onSend(trimmed);

        setMessage("");
    }

    return (
        <div className="border-t border-slate-800 p-4">

            <div className="flex gap-3">

                <textarea
                    rows={1}
                    value={message}
                    disabled={isLoading}
                    placeholder="Type your message..."
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {

                        if (e.key === "Enter" && !e.shiftKey) {

                            e.preventDefault();

                            handleSend();
                        }
                    }}
                    className="
                        min-h-[52px]
                        flex-1
                        resize-none
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-900
                        px-4
                        py-3
                        text-white
                        outline-none
                        transition
                        focus:border-blue-500
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                />

                <button
                    onClick={handleSend}
                    disabled={isLoading || !message.trim()}
                    className="
                        rounded-xl
                        bg-blue-600
                        px-6
                        font-medium
                        text-white
                        transition
                        hover:bg-blue-700
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    Send
                </button>

            </div>

        </div>
    );
}