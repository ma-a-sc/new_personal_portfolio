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

function App() {
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

export default App
