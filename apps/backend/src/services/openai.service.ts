import OpenAI from "openai";

import { env } from "../config/env.js";

import type { ChatCompletion } from "../types/chat.types.js";

class OpenAIService {
    private readonly client: OpenAI;

    constructor() {
        console.log("OpenAI Key Prefix:", env.OPENAI_API_KEY?.substring(0, 10));

        this.client = new OpenAI({
            apiKey: env.OPENAI_API_KEY,
        });
    }

    async generateResponse(
        message: string,
    ): Promise<ChatCompletion> {

        try {

            const response = await this.client.responses.create({

                model: "gpt-5.5",

                input: message,

            });

            return {
                content: response.output_text,
                provider: "openai",
                model: "gpt-5.5",
            };

        } catch (error) {

            console.error("");
            console.error("======================================");
            console.error("OPENAI ERROR");
            console.error("======================================");
            console.error(error);
            console.error("======================================");
            console.error("");

            throw error;
        }
    }
}

export const openAIService = new OpenAIService();