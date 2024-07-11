import "./app.scss";
import Skills from "./components/Skills/Skills";
import { Contact } from "./components/contact/Contact";
import Founder from "./components/founder/Founder";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section1/Section";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Skills />
      <Founder />
      <Contact />
    </div>
  );
}

export default App;
