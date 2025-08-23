import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // optional if you want a central component
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Tech from './components/Tech.jsx';
import Contact from './components/Contact.jsx';
import CompetitiveProgramming from './components/Competative.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Main content column */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Home />
        <About />
        <Tech/>
        <CompetitiveProgramming/>
        <Projects/>
        <Contact/>
        <Footer />
      </div>
    </div>
  </StrictMode>
);
