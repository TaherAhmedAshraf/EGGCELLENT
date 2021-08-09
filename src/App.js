import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Index";
import Menu from "./pages/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const touggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 700 && isOpen) {
        setIsOpen(false)
        console.log("windew is resized")
      }
    }
    window.addEventListener("resize", hiddenMenu)
    return () => {
      window.removeEventListener("resize", hiddenMenu)
    }
  })
  return (
    <>
      <Navbar touggle={touggle} />
      <Dropdown isOpen={isOpen} touggle={touggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
