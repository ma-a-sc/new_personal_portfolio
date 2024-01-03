import React from "react";
import CodeIcon from "./CodeIcon.tsx"
import HeaderDirektive from "@/components/HeaderDirektive.tsx";
const Header: React.FC = () => {

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="px-4 lg:px-6 h-14 bg-white flex items-center justify-between sticky top-0 left-0 w-full">
        <div className="flex items-center">
            <CodeIcon props="h-6 w-6" />
            <span className="text-xl font-bold ml-2">Mark Scharmann</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <HeaderDirektive call={handleClickScroll} id={"about"} label={"About"}/>
            <HeaderDirektive call={handleClickScroll} id={"skills"} label={"Skills"}/>
            <HeaderDirektive call={handleClickScroll} id={"projects"} label={"Projects"}/>
            <HeaderDirektive call={handleClickScroll} id={"experience"} label={"Experience"}/>
            <HeaderDirektive call={handleClickScroll} id={"education"} label={"Education"}/>
            <HeaderDirektive call={handleClickScroll} id={"contact"} label={"Contact"}/>
        </nav>
    </header>
    )
}

export default Header