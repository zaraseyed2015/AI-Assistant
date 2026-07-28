import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import ChatMessages from "../components/ChatMessages";

import { useChat } from "../hooks/useChat";

export default function ChatPage() {

    const {
        messages,
        sendMessage,
        isLoading,
    } = useChat();

    return (
        <div className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900">

            <ChatHeader />

            <ChatMessages
                messages={messages}
                isLoading={isLoading}
            />

            <ChatInput
                onSend={sendMessage}
                isLoading={isLoading}
            />

        </div>
    );
}