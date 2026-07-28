import { Router } from "express";

import { successResponse } from "../lib/api-response.js";

const router = Router();

router.get("/health", (_request, response) => {

    response.json(
        successResponse(
            {
                application: "AI Assistant Platform",
                version: "1.0.0",
                environment: process.env.NODE_ENV,
                timestamp: new Date().toISOString(),
            },
            "Backend is healthy",
        ),
    );

});

export default router;