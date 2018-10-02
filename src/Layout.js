import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './shared/Header';
import Main from './shared/Main';
// import Footer from './shared/Footer';

import './App.css';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>        
          <Header />
          <Main />
          {/* <Footer /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
