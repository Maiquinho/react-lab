import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutUser } from './pages/AboutUser';
import { NotFound } from './pages/NotFound';
import { Faq } from './pages/Faq';

import { Routes, Route } from 'react-router-dom';

import './App.css';


export default function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:slug" element={<AboutUser />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}
