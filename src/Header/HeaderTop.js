import React,{Fragment} from 'react'
import weblogo from "../image/2022-02-10 (3).png"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Header.css"
import { Heart } from 'react-bootstrap-icons'
import { Cart3 } from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'

const HeaderTop = () => {
    return (
        <Fragment>
            <div className='container mt-3'>
                <div className='header_top row justify-content-between align-items-center'>
                    <div className='col-3 d-flex justify-content-between align-items-baseline h-100'>
                        <div className='header_top__logo w-100 h-100'>
                            <img className='web_logo h-100' src={weblogo} />
                        </div>
                        <div className='header_top__number'>
                            <h3>+98-938-765-5432</h3>
                        </div>
                    </div>
                    <div className='col-7 header_top__search position-relative'>
                        <input type={'search'} placeholder='search for product' className='w-100 h-100 rounded-pill border p-2' />
                        <a className='position-absolute d-flex justify-content-center align-items-center' >
                            <Search/>
                        </a>
                    </div>
                    <div className='col-2 d-flex justify-content-evenly align-items-center'>
                        <div className='header_top__favorite d-flex justify-content-start align-items-center'>
                        <Heart />
                        <span>0</span>
                        <h4>favorite</h4>
                        </div>
                        <div className='header_top__shop d-flex justify-content-start align-items-center position-relative'>
                            <Cart3 />
                            <span className='position-absolute d-flex justify-content-center align-items-center'>2</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HeaderTop;