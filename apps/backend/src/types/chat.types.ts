export interface ChatRequest {
    message: string;
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