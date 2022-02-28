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
      {/* you need to wrap your Routes and Route to this Router tag for it to work */}
      <Router>
        <Header></Header>
        <div className='container'>
          {/* Switch is replaced by Routes */}
          <Routes>
            {/* route: self closing tag with params of the path === url path '/' is home, element === component you want to render when the path is chosen */}
            <Route path="/" element={<Home />} />
            <Route path="/phones/:id" element={<PhoneDetails />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
