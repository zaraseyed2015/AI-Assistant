import Navigation from "./Navigation";

export default function Sidebar() {
    return (
        <aside className="w-64 border-r border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 p-6">
                
                    <h1 className="text-xl font-semibold !text-white">
                    AI Assistant
                </h1>

                <p className="mt-1 text-xs text-slate-400">
                    v1.0
                </p>
            </div>

            <Navigation />
        </aside>
    );
}