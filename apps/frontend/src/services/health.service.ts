import { api } from "../lib/api";

export interface HealthResponse {
    success: boolean;
    message: string;
    data: {
        application: string;
        version: string;
        environment: string;
        timestamp: string;
    };
}

export async function getHealth() {
    const response = await api.get<HealthResponse>("/health");
    return response.data;
}