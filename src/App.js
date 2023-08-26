import './App.css';
import React from 'react';
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"
import About from "./component/About/About"
import Services from './component/Services/Services';
import Offers from "./component/Offers/Offeres"
import Business from './component/Business/Business';
import Visions from "./component/Visions/Visions"
import Footer from "./component/Footer/Footer"

function App() {
  return (
    <div className="App">
      <div className='firstPage'>
        <Header/>
        <Home id="home"/>
      </div>
      <About id="about"/>
      <Services/>
      <Offers/>
      <Business/>
      <Visions/>
      <Footer/>
    </div>
  );
}

export default App;
