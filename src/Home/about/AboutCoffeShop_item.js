import React, {Fragment} from 'react';

const AboutCoffeShop_item = (prpos) => {

    return (
        <Fragment>
            <div className='aboutShop_info_item col-2'>
                        <div className='aboutShop_info_item_img'>
                            <img src={prpos.image} />
                        </div>
                        <div className='aboutShop_info_item_info'>
                            <h4>{prpos.title}</h4>
                            <p>{prpos.text}</p>
                        </div>
                    </div>
        </Fragment>
    );
}

export default AboutCoffeShop_item;