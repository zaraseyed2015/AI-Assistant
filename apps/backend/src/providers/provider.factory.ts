import type { AIProvider } from "./ai-provider.js";
import { OllamaProvider } from "./ollama.provider.js";

export class ProviderFactory {

    private static provider: AIProvider;

    static getProvider(): AIProvider {

        if (!ProviderFactory.provider) {

            ProviderFactory.provider = new OllamaProvider();

        }

        return ProviderFactory.provider;

    }

}