import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const schema = z.object({
    PORT: z.coerce.number().default(3000),

    NODE_ENV: z.enum([
        "development",
        "production",
        "test",
    ]).default("development"),

    API_PREFIX: z.string().default("/api"),

    AI_PROVIDER: z.enum([
        "ollama",
        "openai",
    ]).default("ollama"),

    OLLAMA_HOST: z
        .string()
        .default("http://127.0.0.1:11434"),

    OLLAMA_MODEL: z
        .string()
        .default("llama3.2:3b"),

    OPENAI_API_KEY: z.string().optional(),
});

export const env = schema.parse(process.env);