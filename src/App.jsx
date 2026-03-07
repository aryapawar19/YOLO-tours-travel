import Navbar from "./components/Navbar";
import AssistantButton from "./components/AssistantButton";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import About from "./pages/About";
import BookNow from "./pages/BookNow";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>

      <Navbar />

      <section id="home" className="pt-20">
        <Home />
      </section>

      <section id="packages" className="py-20">
        <Packages />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="book" className="py-20">
        <BookNow />
      </section>

      <section id="faq" className="py-20">
        <FAQ />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>

      <AssistantButton />

    </div>
  );
}

export default App;