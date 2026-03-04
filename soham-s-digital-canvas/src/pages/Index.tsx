import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Hackathons />
    <Certifications />
    <Resume />
    <Contact />
    <Footer />
  </>
);

export default Index;
