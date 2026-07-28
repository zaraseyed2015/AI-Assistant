export default function ThinkingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="flex max-w-3xl items-start gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white">
                    🤖
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 shadow-md">
                    <div className="flex items-center gap-2">

                        <span className="text-slate-300">
                            Thinking
                        </span>

                        <div className="flex gap-1">

                            <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>

                            <span
                                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                                style={{ animationDelay: "150ms" }}
                            ></span>

                            <span
                                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                                style={{ animationDelay: "300ms" }}
                            ></span>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}