import React,{ Fragment } from 'react';
import { Link } from "react-router-dom";
import backgroundImgL from '../../image/back (1).png';
import backgroundImgR from '../../image/back (2).png';
import SliderProducts from './SliderProducts';
import './SliderProductsBox.css';

const SliderProductsBox = () => {
    return (
        <Fragment>
            <div className='position-relative productsBox'>
                <div className='d-flex'>
                    <img className='position-absolute backgroundBoxL bottom-0' src={backgroundImgL} />
                    <img className='position-absolute backgroundBoxR bottom-0' src={backgroundImgR} />
                </div>
                <SliderProducts />
                <div className='container d-flex justify-content-center'>
                    <div className='position-absolute sliderProduct_Info'>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </p>
                        <Link  to="/Our_products">See all</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SliderProductsBox;