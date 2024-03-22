import About from "../features/about/About";
import Projects from "../features/projects/Projects";
import Contact from "../features/contact/Contact";
import Services from "../features/services/Services";
import Header from "./Header";
import Skills from "../features/about/Skills";
function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
