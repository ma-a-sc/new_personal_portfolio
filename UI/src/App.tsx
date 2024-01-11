import './App.css'
import Header from "@/components/Header.tsx";
import Greeting from "@/components/Greeting.tsx";
import About from "@/components/About.tsx";
import Skills from "@/components/Skills.tsx";
import Projects from "@/components/Projects.tsx";
import Experience from "@/components/Experience.tsx";
import Education from "@/components/Education.tsx";
import Contact from "@/components/Contact.tsx";
import Footer from "@/components/Footer.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import {useState} from "react";

function App() {
    const [submit, setSubmit] = useState(false)
    const [failed, setFailed] = useState(false)
    return (
        <>
        <div key="1" className="flex flex-col min-h-[100vh]" id="root">
            <Header/>
            <main className="flex-1">
                <Greeting submit={setSubmit} submitState={submit} failed={setFailed} failedState={failed}/>
                <About/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Education/>
                <Contact submit={setSubmit} submitState={submit} failed={setFailed} failedState={failed}/>
                <Footer/>
            </main>
            <ScrollToTop/>
        </div>
        </>
    )
}

export default App
