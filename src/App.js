import React, { Component } from 'react';
import NavbarRoute from './Nav_bar/navibar'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="body" >
        <div className="header">
          <h1>Natural</h1>
          <h3>shop</h3>
        </div>
        <div className="navroute">
          <BrowserRouter>
            <NavbarRoute />
          </BrowserRouter>
        </div>
        
      </div>
    );
  }
}

export default App;
