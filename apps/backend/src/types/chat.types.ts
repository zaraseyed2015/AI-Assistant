export interface ChatRequest {
    message: string;
}

export interface ChatCompletion {
    content: string;
    provider: "mock" | "openai";
    model: string;
}