import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const HeaderLinks = () => {
  return (
      <Fragment>
        <div className='container mt-2'>
          <div className='row justify-content-center align-items-baseline'>
            <div className='col-6'>
              <ul className='row justify-content-start align-items-center'>
                <li className='col-2 Header_link__item'>
                    <Link  to="/">Home</Link>
                </li>
                <li className='col-2 Header_link__item'>
                    <Link  to="/Our_products">our products</Link>
                </li>
                <li className='col-2 Header_link__item'>
                    <Link  to="/About_us">about us</Link>
                </li>
                <li className='col-2 Header_link__item'>
                    <Link  to="/Contact_us">contact us</Link>
                </li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='row justify-content-end align-items-baseline'>
                <li className='col-2 Header_link__item'>
                    <Link  to="/Login">login</Link>
                </li>
                <li className='col-2 Header_link__item'>
                    <Link  to="/Sign_in">sign in</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
  )
}

export default HeaderLinks