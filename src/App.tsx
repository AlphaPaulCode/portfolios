import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16">
        <Landing />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
