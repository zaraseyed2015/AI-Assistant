import { useState } from "react";

interface Props {
    onSend(message: string): void;
}

export default function ChatInput({ onSend }: Props) {
    const [message, setMessage] = useState("");

    function handleSend() {
        if (!message.trim()) return;

        onSend(message);

        setMessage("");
    }

    return (
        <div className="border-t border-slate-800 p-4">
            <div className="flex gap-3">
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                    placeholder="Type your message..."
                    className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
                />

                <button
                    onClick={handleSend}
                    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
}