import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import './Slider.scss';


const Slider = ({product}) => {

    const productImage = 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I';

    return (
        <Fragment>
            <div className='row slider justify-content-around align-items-center mt-0'>
                <div className='col-10'>
                    <div className='row slider_info justify-content-evenly align-items-center'>
                        <div className='col-4 slider_info_img p-0'>
                        <img className='w-100 h-100 p-0' src={product.image} />
                        </div>
                        <div className='col-5 slider_info_text'>
                            <div className='slider_info_text_star d-flex justify-content-start align-items-baseline'>
                                <div className='slider_info_text_star_svg'><StarFill/><StarFill/><StarFill/><StarFill/></div>
                                <div className='slider_info_text_star_Num'>
                                    <h4>{product.starNum}</h4>
                                </div>
                            </div>
                            <div className='slider_info_text_name '>
                                <h2>{product.name}</h2>
                            </div>
                            <div className='slider_info_text_discount'>
                                <h3>{product.discount} discount</h3>
                            </div>
                            <div className='slider_info_text_price mt-4 d-flex justify-content-start align-items-baseline'>
                                <h3 className='discountPrice'>480$</h3>
                                <h3 className='price mx-3'>{product.price}$</h3>
                            </div>
                            <div className='slider_info_text_button mt-4 d-flex justify-content-start align-items-baseline'>
                                <div className='buyButton'>
                                    <Link to="/">Buy</Link>
                                </div>
                                <div className='infoBoutton mx-5'>
                                    <Link to="/Our_products">Deseription</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Slider;