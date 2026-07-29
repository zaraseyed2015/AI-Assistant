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

        const { message } = request.body;

        if (!message?.trim()) {
            response.status(400).json(
                errorResponse("Message cannot be empty"),
            );
            return;
        }

        const completion =
            await chatService.sendMessage(message);

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