import React, {Fragment} from 'react';
import NewsBoxSlider from './NewsBoxSlider';
import './NewsBox.scss';

const NewsBox = () => {
    return (
        <Fragment>
            <div className='container my-4 newsBox'>
                <div className='newsBox_title'>
                    <h2>News</h2>
                </div>
                <div className='newsBox_slider d-flex'>
                    <NewsBoxSlider />
                </div>
            </div>
        </Fragment>
    );
}

export default NewsBox;