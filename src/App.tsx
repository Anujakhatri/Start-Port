import { useEffect } from "react"
import { Navbar } from "./component/Navbar"
import { HeroSection } from "./sections/HeroSection"
import { AboutPage } from "./sections/AboutPage"
import { ProjectPage } from "./sections/ProjectPage"
import { TechStack } from "./sections/TechStack"
import { ExperiencePage } from "./sections/ExperiencePage"
import { ContactPage } from "./sections/ContactPage"
import { Footer } from "./sections/Footer"
import "./App.css"

function App() {
  // Simple reveal animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('reveal-hidden');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPage />
        <ProjectPage />
        <TechStack />
        <ExperiencePage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
