import type {
    ChatCompletion,
    ChatMessage,
} from "../types/chat.types.js";

import { ProviderFactory } from "../providers/provider.factory.js";

export class ChatService {

    async sendMessage(
        messages: ChatMessage[],
    ): Promise<ChatCompletion> {

        const provider = ProviderFactory.getProvider();

        return provider.generateResponse(
            messages,
        );

    }

}

export const chatService = new ChatService();