import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path="/" element={<Trending />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
