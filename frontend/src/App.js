import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import TrustBar from "./components/site/TrustBar";
import About from "./components/site/About";
import Products from "./components/site/Products";
import Projects from "./components/site/Projects";
import WhyChooseUs from "./components/site/WhyChooseUs";
import Process from "./components/site/Process";
import Testimonials from "./components/site/Testimonials";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";
import WhatsAppFab from "./components/site/WhatsAppFab";

const Home = () => {
  useEffect(() => {
    document.title = "Ravi Tiles — Paver Blocks & Precast Cement Works | Gwalior";
  }, []);

  return (
    <div className="App bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Products />
        <WhyChooseUs />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

function App() {

  useEffect(() => {
    // 1. Inject the external Google Analytics script
    const script = document.createElement('script');
    script.src = "https://googletagmanager.com";
    script.async = true;
    document.head.appendChild(script);

    // 2. Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-G1ZZFQ2LQ0');
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
