import { api } from "../../../lib/api";

import type {
    ChatApiResponse,
    ChatMessage,
} from "../types/chat.types";

export async function sendChatMessage(
    messages: Pick<ChatMessage, "role" | "content">[],
) {
    const response = await api.post<ChatApiResponse>(
        "/chat",
        { messages },
    );

    return response.data;
}

export async function streamChatMessage(
    messages: Pick<ChatMessage, "role" | "content">[],
    onChunk: (chunk: string) => void,
) {

    const response = await fetch(
        "http://localhost:3000/api/chat/stream",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages,
            }),
        },
    );

    if (!response.ok || !response.body) {
        throw new Error("Unable to connect to stream.");
    }

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    let buffer = "";

    while (true) {

        const { done, value } =
            await reader.read();

        if (done) break;

        buffer += decoder.decode(
            value,
            {
                stream: true,
            },
        );

        const events = buffer.split("\n\n");

        buffer = events.pop() ?? "";

        for (const event of events) {

            if (!event.startsWith("data:")) {
                continue;
            }

            const json = event
                .replace("data:", "")
                .trim();

            if (json === "done") {
                continue;
            }

            try {

                const token =
                    JSON.parse(json);

                onChunk(token);

            } catch {

                // Ignore malformed chunks

            }

        }

    }

}