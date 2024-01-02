import React from "react";

const Footer: React.FC = () => {
    return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:text-green-500" href="#">
                Terms of Service
            </a>
            <a className="text-xs hover:text-green-500" href="#">
                Privacy Policy
            </a>
        </nav>
    </footer>)
}

export default Footer