import React from 'react';
import "./App.css";

import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Service from "./Components/service/Service";
import Education from "./Components/education/Education";
import Porfolio from './Components/porfolio/Porfolio';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>

        <Home />
        <About />
        <Service />
        <Education />
        <Porfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>




  )
}

export default App