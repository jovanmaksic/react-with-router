import React, { Component } from 'react';

import Header from './shared/Header';
import Main from './shared/Main';
// import Footer from './shared/Footer';

import './App.css';

class Layout extends Component {
  render() {
    return (      
      <div>        
          <Header />
          <Main />
          {/* <Footer /> */}
      </div>
    );
  }
}

export default Layout;
