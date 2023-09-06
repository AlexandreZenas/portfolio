import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { HashRouter, Routes, Route } from 'react-router-dom';

// deploy
export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portifolio' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
      </Routes>
    </HashRouter> 
  );
};