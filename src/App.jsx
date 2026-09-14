import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Project /> 
      <Experience />
      <Reviews />
      <Contact />
    </Layout>
  );
}

export default App;
