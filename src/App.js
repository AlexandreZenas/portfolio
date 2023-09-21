import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
// import Blog from './pages/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { HashRouter, Routes, Route } from 'react-router-dom';


//gitpage
export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/portfolio' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
          {/* <Route path='/Blog' element={<Blog />} /> */}
          <Route path='/Contact' element={<Contact />} />
      </Routes>
    </HashRouter> 
  );
};