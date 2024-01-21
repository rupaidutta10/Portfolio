import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Works from "./Components/Works/works";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import BackgroundVideo from "./Components/BackgroundVideo/backgroundVideo";

function App() {
  return (
    <div className="App">
      <BackgroundVideo/>
      <Navbar />
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      
      <Footer/>

    </div>
  );
}

export default App;
