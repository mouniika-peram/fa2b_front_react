import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

function ProductRootLayout() {


  return (
    <div>
      
      <Header/>
      <Outlet/>
      

    </div>
  )
}

export default ProductRootLayout