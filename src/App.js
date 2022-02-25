import './App.css';
import React , {Fragment} from 'react';
import {Routes ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home';
import Products from './products/Products';
import About from './about/About';
import Contant from './contact/Contant';

function App() {
  return (
    <Fragment>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/Our_products" element={<Products/>} />
        <Route path="/About_us" element={<About/>} />
        <Route path="/Contant-us" element={<Contant/>} />
      </Routes >
    </Fragment>
  );
}

export default App;
