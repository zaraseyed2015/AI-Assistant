import { Request, Response } from "express";

import { errorResponse } from "../lib/api-response.js";

export function notFoundMiddleware(
    _request: Request,
    response: Response,
) {
    response.status(404).json(
        errorResponse("Resource not found"),
    );
}