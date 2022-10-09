
import './App.css';
import BotomBar from './components/BotomBar';
import NaveBar from './components/NaveBar';
import About from './pages/About';
import Contact from './pages/Contact';
import { Router,Route, Routes } from 'react-router-dom';

import Home from './pages/Home';


function App() {
  return (
    <div>
     
      <NaveBar/>
      <Routes>
      <Route>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} /> 
      </Route>
      </Routes>
      <BotomBar/>
      
    </div>
   
  );
}

export default App;


