import { api } from "../../../lib/api";

import type {
    ChatApiResponse,
    ChatMessage,
} from "../types/chat.types";

export async function sendChatMessage(
    messages: Pick<ChatMessage, "role" | "content">[],
) {
    const response = await api.post<ChatApiResponse>(
        "/chat",
        {
            messages,
        },
    );

    return response.data;
}