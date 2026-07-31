import type { ChatCompletion } from "../types/chat.types.js";

export interface AIProvider {
    generateResponse(
        message: string,
    ): Promise<ChatCompletion>;
}