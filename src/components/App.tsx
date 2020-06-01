import React from 'react';
import '../App.css';
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout />
        </BrowserRouter>
      <header className="App-header">

        <h1>Hello Grupp 7</h1>
        
      </header>
    </div>
  );
}

export default App;
