import type { ChatCompletion } from "../types/chat.types.js";

import { ProviderFactory } from "../providers/provider.factory.js";

export class ChatService {

    async sendMessage(
        message: string,
    ): Promise<ChatCompletion> {

        const provider = ProviderFactory.getProvider();

        return provider.generateResponse(message);

    }

}

export const chatService = new ChatService();