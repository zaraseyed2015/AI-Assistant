import type { ChatCompletion } from "../types/chat.types.js";
import type { AIProvider } from "./ai-provider.js";

interface OllamaResponse {
    response: string;
    done: boolean;
}

export class OllamaProvider implements AIProvider {

    private readonly baseUrl = "http://127.0.0.1:11434";

    constructor() {

        console.log("====================================");
        console.log(" Ollama Provider Initialised");
        console.log(" URL   :", this.baseUrl);
        console.log(" Model : llama3.2:3b");
        console.log("====================================");

    }

    async generateResponse(
        message: string,
    ): Promise<ChatCompletion> {

        console.log("");
        console.log("========== OLLAMA ==========");
        console.log("User:", message);

        const response = await fetch(
            `${this.baseUrl}/api/generate`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "llama3.2:3b",
                    prompt: message,
                    stream: false,
                }),
            },
        );

        if (!response.ok) {

            const error = await response.text();

            throw new Error(error);

        }

        const data = await response.json() as OllamaResponse;

        console.log("Assistant:");
        console.log(data.response);
        console.log("============================");
        console.log("");

        return {
            content: data.response,
            provider: "ollama",
            model: "llama3.2:3b",
        };
    }
}