import React from 'react';
import ReactDOM from 'react-dom';

/* Layout */
import Header from './Layout/Header';
import Banner from './Layout/Banner';
import ProductList from './Layout/ProductList';
import Newsletter from './Layout/Newsletter';
import Footer from './Layout/Footer';

/* CSS */
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Banner />
    <ProductList />
    <Newsletter />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);
