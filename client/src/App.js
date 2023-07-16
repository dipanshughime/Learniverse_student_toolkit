import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Navbar from './Component/Navbar';
import React from 'react'
import Gpt from './pages/gpt';
import Notion from './pages/notion';


function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    
  <Routes>
    <Route exact path="/" element = {<Home/>} />
    <Route  path="/about" element = {<About/>} />
    <Route path="/contact" element = {<Contact/>} />
    <Route path="/gpt" element = {<Gpt/>} />
    <Route path="/index" element = {<Notion/>} />
  </Routes>      
  
</BrowserRouter>
    </>
  );
}

export default App;
