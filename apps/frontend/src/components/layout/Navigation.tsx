import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Dashboard" },
    { to: "/chat", label: "Chat" },
    { to: "/documents", label: "Documents" },
    { to: "/agents", label: "AI Agents" },
    { to: "/sql", label: "SQL Assistant" },
    { to: "/cv", label: "CV Assistant" },
    { to: "/settings", label: "Settings" },
];

export default function Navigation() {
    return (
        <nav className="p-4">
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                [
                                    "block rounded-lg px-3 py-2 transition-colors duration-200",
                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                                    isActive
                                        ? "bg-blue-600 text-white font-medium"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white",
                                ].join(" ")
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}