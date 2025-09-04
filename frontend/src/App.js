// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChurchList from './components/ChurchList.js';
import ChurchDetails from './components/ChurchDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Church Finder ⛪</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ChurchList />} />
            <Route path="/church/:id" element={<ChurchDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;