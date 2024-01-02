import React from "react";
import CodeIcon from "./CodeIcon.tsx"
const Header: React.FC = () => {
    return (
        <header className="px-4 lg:px-6 h-14 bg-white flex items-center justify-between sticky top-0 left-0 w-full">
        <div className="flex items-center">
            <CodeIcon props="h-6 w-6" />
            <span className="text-xl font-bold ml-2">Mark Scharmann</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:text-green-500" href="#about">
                About
            </a>
            <a className="text-sm font-medium hover:text-green-500" href="#skills">
                Skills
            </a>
            <a className="text-sm font-medium hover:text-green-500" href="#projects">
                Projects
            </a>
            <a className="text-sm font-medium hover:text-green-500" href="#experience">
                Experience
            </a>
            <a className="text-sm font-medium hover:text-green-500" href="#education">
                Education
            </a>
            <a className="text-sm font-medium hover:text-green-500" href="#contact">
                Contact
            </a>
        </nav>
    </header>
    )
}

export default Header