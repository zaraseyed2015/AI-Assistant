import { NextFunction, Request, Response } from "express";

import { errorResponse } from "../lib/api-response.js";

export function errorMiddleware(
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
) {
    console.error(error);

    response.status(500).json(
        errorResponse(
            error.message || "Internal Server Error",
        ),
    );
}