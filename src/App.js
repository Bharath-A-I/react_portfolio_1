import './App.css';
import React from 'react';
import Header from './comp/Header';
import Hero from './comp/Hero';
import About from './comp/About';
import Project from './comp/Project';
import Skills from './comp/skills';
import Contact from './comp/contact';
import Footer from './comp/footer'; 
function App() {
  return (<div className="App">
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/>
  </div> 
  );
}

export default App;
