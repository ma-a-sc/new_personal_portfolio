/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bNR8WD8HD9x
 */
import Header from "./Header.tsx"
import React from "react";
import Greeting from "@/components/Greeting.tsx";
import About from "@/components/About.tsx";
import Skills from "@/components/Skills.tsx";
import Experience from "@/components/Experience.tsx";
import Education from "@/components/Education.tsx";
import Footer from "@/components/Footer.tsx";
import Contact from "@/components/Contact.tsx";
import Projects from "@/components/Projects.tsx";

const Component: React.FC = () => {
    return (
        <div key="1" className="flex flex-col min-h-[100vh]">
            <Header/>
            <main className="flex-1">
                <Greeting/>
                <About/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Education/>
                <Contact/>
                <Footer/>
            </main>
        </div>
    )
}


export default Component