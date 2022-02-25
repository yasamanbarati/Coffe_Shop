import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
    return (
        <Fragment>
            <div className='footer_info_links_item'>
                <div className='footer_info_links_item_title'>
                    <h4>Links</h4>
                </div>
                <div className='footer_info_links_item_links'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link  to="/Our_products">our products</Link>
                        </li>
                        <li>
                            <Link  to="/About_us">about us</Link>
                        </li>
                        <li>
                            <Link  to="/Contact_us">contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer_info_links_item'>
                <div className='footer_info_links_item_title'>
                    <h4>products</h4>
                </div>
                <div className='footer_info_links_item_links'>
                    <ul>
                        <li>
                            <Link to='/Our_products'>Coffee powder</Link>
                        </li>
                        <li>
                            <Link  to="/Our_products">mug</Link>
                        </li>
                        <li>
                            <Link  to="/Our_products">coffee maker</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default FooterLinks;