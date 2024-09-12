import React from 'react';
import NavBar from "./navbar.jsx";
import Footer from './footer.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Services from './services.jsx';

const MainPage = () => {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="#about">
        <About />
      </section>
      <section id="#services">
        <Services />
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
