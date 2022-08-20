import React from 'react';
import { useEffect } from 'react';
import {
  Cta,
  Navbar,
  FAQ,
  Numbers,
  FeatureCards,
  Copyright,
} from './components';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Features,
  Footer,
  Header,
  Promote,
  Social,
  Testimonials,
} from './containers';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="section-hero">
        <Navbar />
        <Header />
      </section>
      <section className="section-features">
        <Features />
      </section>
      <section className="section-social">
        <Social />
      </section>

      <section className="section-numbers">
        <Numbers />
      </section>
      <section className="section-promote">
        <Promote />
      </section>
      <section className="section-cards">
        <FeatureCards />
        <FAQ />
      </section>
      <section className="section-testimonials">
        <Testimonials />
      </section>
      <footer className="section-footer">
        <Cta />
        <Footer />
      </footer>
    </>
  );
}

export default App;
