import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Biography } from "../components/Biography";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { AskAI } from "../components/AskAI";

export default function Home() {
  return (
    <div className="portfolio">
      <Header />
      <main id="main">
        <section id="about" className="about-section">
          <Hero />
          <Biography />
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AskAI />
    </div>
  );
}
