import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

import { Provider } from 'react-redux';

import store from './store';

function ProductRootLayout() {


  return (
    <Provider store={store}>
    <div>
    <Header/>
    <Outlet/>
    </div>
    </Provider>
  )
}

export default ProductRootLayout