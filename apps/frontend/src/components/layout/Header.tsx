export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
            <h1 className="text-xl font-semibold !text-white">
                AI Assistant Platform
            </h1>

            <div className="text-sm text-slate-400">
                Welcome
            </div>
        </header>
    );
}