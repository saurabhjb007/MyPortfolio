import { Toaster} from "react-hot-toast";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setmenuOpen] = useState(false)
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);


  return ratio < 2.5 ? (
    <>
    <HeaderPhone menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Home/>
      <Work/>
      <Services/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  ): (
    <em id="customMessage">Please Change the ratio to View!</em>
  )
}

export default App;
