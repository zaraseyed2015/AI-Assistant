export interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

export interface ChatRequest {
    messages: ChatMessage[];
}

export type AIProviderName =
    | "mock"
    | "ollama"
    | "openai"
    | "azure-openai"
    | "claude"
    | "gemini";

export interface ChatCompletion {
    content: string;
    provider: AIProviderName;
    model: string;
}