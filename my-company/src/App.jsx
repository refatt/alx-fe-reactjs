import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: 'navy', color: 'white' }}>
      <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Footer />
      </Routes>
    </Router>
  );
}

export default App;
