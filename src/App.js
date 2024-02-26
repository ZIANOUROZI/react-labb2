import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu";
import Cv from "./pages/Cv";
import Hem from "./pages/Hem";
import Kontakt from "./pages/Kontakt";
import Projekt from "./pages/Projekt";
import Om from "./pages/Om";
import Footer from "./components/Footer";
import './App.css';
export default function App() {
  return (
    <Router>
      <div className="site-container">
        <header className="site-header">
          <Menu/>
        </header>
        <main className="site-content">
         <Routes> 
           <Route path= "/" element = {<Hem/>}/> 
           <Route path= "/om" element = {<Om/>}/>
           <Route path= "/kontakt" element= {<Kontakt/>}/>
           <Route path= "/projekt" element={<Projekt/>}/>
           <Route path= "/cv" element = {<Cv/>}/>
          </Routes>
        </main>
      <footer className="site-footer">
          <Footer/>
      </footer>
      </div>
    </Router>
    
  );
}
