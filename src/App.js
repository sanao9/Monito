import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/common/NavBar';
import Banner from './components/Banner';
import Card from './components/PetCard';
import MBanner from './components/MidBannerr';
import ProdCard from './components/ProductCard';
import Sellers from './components/Sellers';
import BBanner from './components/BotBanner';
import PKnoledge from './components/PetKnoledge';
import Footer from './components/common/Footer';
import Category from './components/Category';
import PDetails from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card/>
      <MBanner/>
      <ProdCard/>
      <Sellers/>
      <BBanner/>
      <PKnoledge/>
      <Category/>
      <PDetails/>
      <Footer/>
    </div>
  );
}

export default App;
