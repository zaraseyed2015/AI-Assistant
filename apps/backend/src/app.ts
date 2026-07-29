import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env.js";

import healthRoutes from "./routes/health.routes.js";
import chatRoutes from "./routes/chat.routes.js";

import { errorMiddleware } from "./middleware/error.middleware.js";
import { notFoundMiddleware } from "./middleware/notFound.middleware.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    }),
);

/*app.get("/test", (_req, res) => {
    res.json({
        success: true,
        message: "Test route works",
    });
});*/

app.use(`${env.API_PREFIX}/health`, healthRoutes);
app.use(`${env.API_PREFIX}/chat`, chatRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;