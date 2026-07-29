import { api } from "../../../lib/api";

export interface ChatApiResponse {
    success: boolean;
    message: string;
    data: {
        content: string;
        provider: string;
        model: string;
    };
}

export async function sendChatMessage(message: string) {
    const response = await api.post<ChatApiResponse>(
        "/chat",
        {
            message,
        },
    );

    return response.data;
}