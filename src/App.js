import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Home/Home";
import Aboutnav from "./Pages/Aboutnav/Aboutnav";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact-2/Contact-2"; // .jsx not needed

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutnav" element={<Aboutnav />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
