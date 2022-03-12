import React, { Fragment } from "react";
import { HeartFill } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { Share } from 'react-bootstrap-icons';
import { BarChartLine } from 'react-bootstrap-icons';
import { ChevronUp } from 'react-bootstrap-icons';
import { ChevronDown } from 'react-bootstrap-icons';

import SingleSlider_Product from "./single_slider/SingleSlider_Product";
import './Single_Products.scss';
import Ptable from './productInfo_table/productInfo_table';

const Single_Products = () => {

    const FillTheHeart = () => {
        
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-around single mt-4'>
                    <div className='col-4 singleSlider'>
                        <div className='singleSlider_Heart'>256<HeartFill className='ms-1' /></div>
                        <SingleSlider_Product />
                    </div>
                    <div className='col-7 singleInfo'>
                        <div className='singleInfoName row justify-content-between align-items-baseline border-bottom pb-4'>
                            <div className='Products_name col-6'>
                                <h2>coffe Point Brazil 100%</h2>
                            </div>
                            <div className='Products_sharing col-4'>
                                <div className='star d-flex align-items-baseline justify-content-xxl-between'>
                                    <StarFill className='active' />
                                    <StarFill className='active' />
                                    <StarFill className='active' />
                                    <StarFill className='active' />
                                    <StarFill className='active' />
                                    <p className='border-start me-5 p-2'>11</p>
                                </div>
                                <div className='sharing d-flex justify-content-between align-items-center'>
                                    <div className='Comparison'>
                                        <button className='bg-transparent border d-flex justify-content-between align-items-center'>
                                            <BarChartLine />
                                            <p className='mb-0'>Comparison
                                            </p>
                                        </button>
                                    </div>
                                    <div className='sharing_box'>
                                        <button className='d-flex justify-content-between align-items-center bg-transparent border-0 '>
                                            <p className='mb-0 me-2'>sharing</p>
                                            <Share />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='singleInfoPrice row justify-content-between align-items-baseline border-bottom pb-4 pt-3'>
                            <div className='product_price'>
                                <div className='product_priceCaption'>
                                    <p>
                                        Proposed price</p>
                                </div>
                                <div className='d-flex price justify-content-between align-items-baseline'>
                                    <h3>1147$</h3>
                                    <p>1700$</p>
                                </div>
                            </div>
                            <div className='product_shop col-6 d-flex price justify-content-between align-items-end'>
                                <div className='product_shop_number d-flex price justify-content-between align-items-stretch'>
                                    <div className='product_shop_number_num'>
                                        <p>Number</p>
                                        <div className='d-flex product_num justify-content-around align-items-center'>
                                            <p>0</p>
                                            <div>
                                                <button>
                                                    <ChevronUp />
                                                </button>
                                                <button>
                                                    <ChevronDown />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='product_shop_number_fiv d-flex align-items-end ms-3'>
                                        <button className='border-0 rounded-3 px-3' onClick={FillTheHeart()}>
                                            <HeartFill />
                                        </button>
                                    </div>
                                </div>
                                <div className='product_shop_Buy'>
                                    <button>
                                        <p>Buy</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='singleInfosingleInfo_information row justify-content-between align-items-baseline pb-4'>
                            <div>
                                <Ptable />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Single_Products;