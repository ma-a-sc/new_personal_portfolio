import React from "react";

const Footer: React.FC = () => {
    return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Mark Scharmann. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <p className="text-xs ">
                Initial design created using <a className="hover:text-green-500 cursor-pointer">v0 by Vercel</a>.
                Further refined, developed and deployed by Me on <a className="hover:text-green-500 cursor-pointer">Railway</a>.
            </p>
        </nav>
    </footer>)
}

export default Footer