import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import routes from './Routes';
import NotFound from './NotFound';

const DynamicPage = () => {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default DynamicPage;
