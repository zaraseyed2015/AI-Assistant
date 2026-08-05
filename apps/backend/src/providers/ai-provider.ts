import type {
    ChatCompletion,
    ChatMessage,
} from "../types/chat.types.js";

export interface AIProvider {

    generateResponse(
        messages: ChatMessage[],
    ): Promise<ChatCompletion>;

    generateStream(
        messages: ChatMessage[],
    ): AsyncGenerator<string>;

}