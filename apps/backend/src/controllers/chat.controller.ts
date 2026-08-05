import type {
    Request,
    Response,
    NextFunction,
} from "express";

import {
    successResponse,
    errorResponse,
} from "../lib/api-response.js";

import { chatService } from "../services/chat.service.js";

import type {
    ChatRequest,
} from "../types/chat.types.js";

export async function sendMessage(
    request: Request<{}, {}, ChatRequest>,
    response: Response,
    next: NextFunction,
) {
    try {

        const { messages } = request.body;

        if (!messages || messages.length === 0) {

            response.status(400).json(
                errorResponse("Messages cannot be empty"),
            );

            return;

        }

        console.log("");

        console.log("========== REQUEST ==========");
        console.log("History Length:", messages.length);
        console.log("History:", messages);
        console.log("=============================");

        const completion =
            await chatService.sendMessage(messages);

        response.json(
            successResponse(
                completion,
                "Message generated successfully",
            ),
        );

    } catch (error) {

        next(error);

    }

}

export async function streamMessage(
    request: Request<{}, {}, ChatRequest>,
    response: Response,
    next: NextFunction,
) {
    try {

        const { messages } = request.body;

        if (!messages || messages.length === 0) {

            response.status(400).json(
                errorResponse("Messages cannot be empty"),
            );

            return;

        }

        response.setHeader(
            "Content-Type",
            "text/event-stream",
        );

        response.setHeader(
            "Cache-Control",
            "no-cache",
        );

        response.setHeader(
            "Connection",
            "keep-alive",
        );

        const stream =
            chatService.streamMessage(messages);

        for await (const token of stream) {

            response.write(
                `data: ${JSON.stringify(token)}\n\n`,
            );

        }

        response.write("event: end\n");
        response.write("data: done\n\n");

        response.end();

    } catch (error) {

        next(error);

    }

}