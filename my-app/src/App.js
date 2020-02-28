import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import HowItWorks from './Components/HowItWorks.js';
import Pros from './Components/Pros.js';
import Leaders from './Components/Leaders.js';
import Prices from './Components/Prices.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <React.Fragment>

      <Header/>
      <HowItWorks/>
      <Pros/>
      <Leaders/>
      <Prices/>
      <Footer/>

    </React.Fragment>
  );
}

export default App;
