import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ChatPage from "../features/chat/pages/ChatPage";
import DocumentsPage from "../features/documents/pages/DocumentsPage";
import AgentsPage from "../features/agents/pages/AgentsPage";
import SqlAssistantPage from "../features/sql/pages/SqlAssistantPage";
import CvAssistantPage from "../features/cv/pages/CvAssistantPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "chat",
                element: <ChatPage />,
            },
            {
                path: "documents",
                element: <DocumentsPage />,
            },
            {
                path: "agents",
                element: <AgentsPage />,
            },
            {
                path: "sql",
                element: <SqlAssistantPage />,
            },
            {
                path: "cv",
                element: <CvAssistantPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },
        ],
    },
]);