import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import FeaturedVideos from './components/home/FeaturedVideos';
import Blog from './components/home/Blog';
import Contact from './components/home/Contact';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors selection:bg-blue-600 selection:text-white">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideos />
        <About />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;