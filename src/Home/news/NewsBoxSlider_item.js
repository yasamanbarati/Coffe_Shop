import React, {Fragment} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

const NewsBoxSlider_item = ({NewsInfo}) => {

    return (
        <Fragment>
            <div className='newsBox_slider_item d-flex'>
                <div className='newsBox_slider_item_img'>
                    <img className='w-100 h-100' src={NewsInfo.image} />
                </div>
                <div className='newsBox_slider_item_info'>
                    <div className='newsBox_slider_item_info_text'>
                        <span>{NewsInfo.date}</span>
                        <h4>{NewsInfo.title}</h4>
                        <p>{NewsInfo.info}</p>
                    </div>
                    <div className='newsBox_slider_item_info_btn'>
                        <button>
                            <ArrowRight />
                            <p>Continues</p>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NewsBoxSlider_item;