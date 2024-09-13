import './App.css'; 
import './index.css'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import DynamicPage from './Pages/DynamicPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<DynamicPage />} />
      </Routes>
    </Router>
  );
};

export default App;
