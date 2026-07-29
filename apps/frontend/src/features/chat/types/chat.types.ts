export interface ChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    createdAt: Date;
}

export interface ChatApiResponse {
    success: boolean;
    message: string;
    data: {
        content: string;
        provider: string;
        model: string;
    };
}