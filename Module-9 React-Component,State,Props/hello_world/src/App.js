
import logo from './logo.svg';

import React from 'react';
import './App.css'; // Add this to style the layout

function App() {
  return (
    <div className="container" >
      <div className="upper-half">
        <h1 className='h1'>React JS</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="lower-half">
        <h1 className='h1'>Hello, World!</h1>
      </div>
    </div>
  );
}

export default App;

