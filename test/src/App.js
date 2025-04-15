import React from 'react';

import './App.css';
import { Navigate, Route, Router } from 'react-router-dom';
import Step11 from './components/Step11';
import Step2 from './components/Step2';
import Step3 from './components/Step3';




function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" elements={<Navigate to="/step1"/>}/>
        <Route path='/step11' element={<Step11 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        



      </Router>



    </div>
  );
}

export default App;
