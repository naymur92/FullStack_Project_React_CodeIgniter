import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function FrontTemplate() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default FrontTemplate;
