import { useEffect, useState } from "react";

import { getHealth } from "../../../services/health.service";

export default function DashboardPage() {
    const [status, setStatus] = useState("Checking...");
    const [version, setVersion] = useState("");

    useEffect(() => {
        async function loadHealth() {
            try {
                const result = await getHealth();

                setStatus("🟢 Backend Connected");
                setVersion(result.data.version);
            } catch {
                setStatus("🔴 Backend Offline");
            }
        }

        loadHealth();
    }, []);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white">
                AI Assistant Platform
            </h1>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="mb-2 text-xl font-semibold text-white">
                    System Status
                </h2>

                <p className="text-slate-300">
                    {status}
                </p>

                {version && (
                    <p className="mt-2 text-sm text-slate-500">
                        Backend Version: {version}
                    </p>
                )}
            </div>
        </div>
    );
}