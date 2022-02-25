import React,{Fragment} from 'react';
import footerBackgrund from '../image/footerBack.png';
import FooterLinks from './FooterLinks';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import './Footer.scss';

const Footer = () => {
    return (
        <Fragment>
            <div className='footer'>
                <div className='footer_background'>
                    <img className='w-100 h-100' src={footerBackgrund} />
                </div>
                <div className='container '>
                    <div className='footer_info row justify-content-around align-items-baseline'>
                        <div className='footer_info_box col-3'>
                            <div className='footer_info_box_title'>
                            <h2>Coffe Shop</h2>
                            </div>
                            <div className='footer_info_box_info'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua Egestas purus viverra accumsan in nisl nisi
                            </p>
                            </div>
                        </div>
                        <div className='footer_info_links col-3 d-flex justify-content-around align-items-baseline'>
                            <FooterLinks />
                        </div>
                        <div className='footer_info_social col-3'>
                            <div className='footer_info_social_title'>
                                <h4>Contact Us</h4>
                            </div>
                            <div className='footer_info_social_info'>
                                <p>Iran,NorthKhorsan,bojunrd</p>
                                <p>+98-938-765-4321</p>
                            </div>
                            <div className='d-flex footer_info_social_svg'>
                                <a href=''>
                                    <Facebook />
                                </a>
                                <a href=''>
                                    <Linkedin />
                                </a>
                                <a href=''>
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;