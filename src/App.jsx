import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";


const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">
      <Parallax  type="about" />
    </section>
    <section> 
      <About/>
    </section>
    
    <section id="Portfolio">
      <Parallax type="portfolio"/>
      </section>
    <Portfolio/>
    <section id="Contact"><Contact/></section> 

  </div>;
};

export default App;
