import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section1/Section";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}

export default App;
