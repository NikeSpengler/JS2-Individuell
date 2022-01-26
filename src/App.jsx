import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Cv from "./components/cv/Cv"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";




function App() {
  const [menuOpen, setMenuOpen] = useState(false) //gör så att grundläget är hamburgermeny, som icke aktiv
  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
         <Intro/>
         <Skills/>
         <Cv/>
         <About/>
         <Contact/>
       </div>
    </div>
  );
}

export default App;
