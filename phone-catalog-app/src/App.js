import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.scss";

import PhoneDetails from './components/phoneDetails/PhoneDetails';
import Home from './components/home/Home';
import Header from './components/header/Header';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<PhoneDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
