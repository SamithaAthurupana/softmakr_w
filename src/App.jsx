import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CustomerStories from './pages/CustomerStories';
import Careers from './pages/Careers';
import Apply from './pages/Apply';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CursorGlow />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/apply" element={<Apply />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
