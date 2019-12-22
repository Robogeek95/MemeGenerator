import React from 'react';
import './App.css';
import Header from './Header'
import MemeGenerator from './MemeGenerator'

function App() {
  return (
    <div>
      <div className="col d-md-flex justify-content-center">
        <Header />
      </div>

      <MemeGenerator />
    </div>
  );
}

export default App;
