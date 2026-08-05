import { Ollama } from "ollama";

import { env } from "../config/env.js";

import type {
    ChatCompletion,
    ChatMessage,
} from "../types/chat.types.js";

import type { AIProvider } from "./ai-provider.js";

export class OllamaProvider implements AIProvider {

    private readonly client: Ollama;

    constructor() {

        this.client = new Ollama({
            host: env.OLLAMA_HOST,
        });

        console.log("");

        console.log("====================================");
        console.log(" Ollama Provider Initialised");
        console.log(` URL   : ${env.OLLAMA_HOST}`);
        console.log(` Model : ${env.OLLAMA_MODEL}`);
        console.log("====================================");
        console.log("");

    }

    async generateResponse(
        messages: ChatMessage[],
    ): Promise<ChatCompletion> {

        console.log("");

        console.log("========== OLLAMA ==========");

        const lastMessage = messages.at(-1);

        console.log(
            "User:",
            lastMessage?.content ?? "<empty>",
        );

        const response = await this.client.chat({

            model: env.OLLAMA_MODEL,

            messages,

        });

        console.log("Assistant:");

        console.log(
            response.message.content,
        );

        console.log("============================");

        return {

            content: response.message.content,

            provider: "ollama",

            model: env.OLLAMA_MODEL,

        };

    }

    async *generateStream(
        messages: ChatMessage[],
    ): AsyncGenerator<string> {

        const stream = await this.client.chat({

            model: env.OLLAMA_MODEL,

            messages,

            stream: true,

        });

        for await (const chunk of stream) {

            if (chunk.message?.content) {

                yield chunk.message.content;

            }

        }

    }

}