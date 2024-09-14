import './App.css'; 
import './index.css'; 
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import DynamicPage from './Pages/DynamicPage';
import NotFound from "./Pages/NotFound";

const App = () => {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<DynamicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
