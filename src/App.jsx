import React from 'react';
import NavBar from "./components/navBar/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Skills from "./components/skills/Skills.jsx";
import WorkExperience from "./components/workExperience/WorkExperience.jsx";
import ContacMe from "./components/contacMe/ContacMe.jsx";
import Footer from "./components/footer/Footer.jsx";
import Projects from "./components/projectsDone/Projects.jsx";
import AboutMe from './components/aboutMe/AboutMe.jsx';

function App() {
    return (
        <React.StrictMode>
            <NavBar />
            <div className="container">
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <WorkExperience />
                <ContacMe />
            </div>
            <Footer />
        </React.StrictMode>
    );
}

export default App