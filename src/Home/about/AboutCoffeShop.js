import React, {Fragment} from 'react';
import AboutCoffeShop_item from './AboutCoffeShop_item';
import avatar01 from '../../image/avatur-01.png';
import avatar02 from '../../image/avatur-02.png';
import avatar03 from '../../image/avatur-03.png';
import avatar04 from '../../image/avatur-04.png';
import './AboutCoffeShop.scss';

    const AboutShopInfo = [
        {
            id : 'a1',
            imageItem : avatar01,
            titleItem : 'Save Money',
            textItem : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            id : 'a1',
            imageItem : avatar02,
            titleItem : 'Free Delivery',
            textItem : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            id : 'a1',
            imageItem : avatar03,
            titleItem : 'Esay To Find',
            textItem : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            id : 'a1',
            imageItem : avatar04,
            titleItem : 'High quality',
            textItem : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ];

const AboutCoffeShop = () => {

    return (
        <Fragment>
            <div className='container aboutShop mt-5'>
                <div className='aboutShop_title'>
                    <h2>Why choose us </h2>
                </div>
                <div className='aboutShop_info row justify-content-evenly align-items-center mt-4'>
                    <AboutCoffeShop_item 
                    image={AboutShopInfo[0].imageItem}
                    title={AboutShopInfo[0].titleItem}
                    text={AboutShopInfo[0].textItem} />
                    <AboutCoffeShop_item 
                    image={AboutShopInfo[1].imageItem}
                    title={AboutShopInfo[1].titleItem}
                    text={AboutShopInfo[1].textItem} />
                    <AboutCoffeShop_item 
                    image={AboutShopInfo[2].imageItem}
                    title={AboutShopInfo[2].titleItem}
                    text={AboutShopInfo[2].textItem} />
                    <AboutCoffeShop_item 
                    image={AboutShopInfo[3].imageItem}
                    title={AboutShopInfo[3].titleItem}
                    text={AboutShopInfo[3].textItem} />
                </div>
            </div>
        </Fragment>
    );
}

export default AboutCoffeShop;