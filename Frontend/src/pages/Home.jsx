import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;
