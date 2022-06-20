import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import { Route, Routes} from 'react-router-dom';
import ContactForm from './Components/Contact/ContactForm';


function App() {
  return (
  <div className="App">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<ContactForm />} />
  </Routes>      
  </div>
  );
}

export default App;
