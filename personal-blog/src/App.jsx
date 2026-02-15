import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';    
import Projects from './pages/Projects';   
import './App.css'

function App() {
  return (
    <div className="content" style={{ minHeight: "100vh", width: "100vw" }}>
    <Router>
      < Header />
      <main className= "style">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </main>
      < Footer />
    </Router>
    </div>
  );
}

export default App
