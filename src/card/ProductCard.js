import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { StarFill } from 'react-bootstrap-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import './ProductCard.scss';

const ProductCard = ({ Data }) => {

    const [activStar, setActiveStar] = useState([]);
    const [attStar, setAttStar] = useState([]);

    const starFill = Data.starNum / 5;
    const startCount = 5 - starFill;
    for (let j = 0; j < 5; j++) {
        if (j < starFill) {
            activStar.push(j);
        }
        else {
            attStar.push(j);
        }
    }

    // const star_fill = document.getElementsByClassName('starSvg');
    // if (star_fill[0].className.contains("starSvg")){
    //     star_fill[0].classList.remove("active");
    // }
    // else{
    //     star_fill[0].classList.add("active");
    // }

    const [state, setState] = useState(true)

    return (
        <Fragment>
            <Link to="/Our_products" className='col-2 ProductCard_item'>
                <Card className='ProductCard'>
                    <CardMedia className='productCard_image'
                        component="img"
                        image={Data.image}
                        alt="productsImg"
                    />
                    <CardContent className='productCard_info'>
                        <div className='productCard_info_star d-flex align-items-baseline'>
                            <div className='productCard_info_star_icon'>
                                {activStar.map((item) => {
                                    return (
                                        <StarFill className='active' />
                                    )
                                })
                                }
                                {attStar.map((item) => {
                                    return (
                                        <StarFill />
                                    )
                                })
                                }
                            </div>
                            <div className='productCard_info_star_Num'>
                                <p>{Data.starNum}</p>
                            </div>
                        </div>
                        <div className='productCard_info_name'>
                            <h2>{Data.name}</h2>
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className='productCard_price d-flex w-100 justify-content-between align-items-baseline pt-3'>
                            <h3 className='discountPrice'>1147$</h3>
                            <h3 className='price'>{Data.price}$</h3>
                        </div>
                    </CardActions>
                </Card>
            </Link>
        </Fragment>
    );
}

export default ProductCard;