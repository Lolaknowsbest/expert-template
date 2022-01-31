import React from "react";
import ReactDOM from "react-dom";
import AppStyle from "./App.module.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

function App() {
  return (
    
    <div className={AppStyle.home} id="homeHash"> 
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      
    </div>
  
  );
}

export default App;
