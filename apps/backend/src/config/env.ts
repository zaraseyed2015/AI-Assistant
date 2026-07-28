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
    OPENAI_API_KEY: z.string().optional(),
});

export const env = schema.parse(process.env);