import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Glimpse from './components/Glimpse';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Collections from './components/Collections';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Glimpse />
      <Highlights />
      <Featured />
      <Collections />
      <About />
      <Contact />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;