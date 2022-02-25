import React, {Fragment, useState} from 'react';
import ProductCard from '../../card/ProductCard';

const ProductCardItem = [
    {
        id : 'productCard01',
        image : 'https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw',
        starNum: 15,
        name : 'coffe Point Brazil 100%',
        price : 1700,
    },
    {
        id : 'productCard02',
        image : 'https://i.picsum.photos/id/113/4168/2464.jpg?hmac=p1FqJDS9KHL70UWqUjlYPhJKBdiNOI_CIH0Qo-74_fU',
        starNum: 25,
        name : 'coffe Point Brazil 100%',
        price : 2100,
    },
    {
        id : 'productCard03',
        image : 'https://i.picsum.photos/id/225/1500/979.jpg?hmac=jvGoek9ng_Y0GaBbzxN0KJhHaiPtk1VfRcukK8R8FxQ',
        starNum: 5,
        name : 'coffe Point Brazil 100%',
        price : 1400,
    },
    {
        id : 'productCard04',
        image : 'https://i.picsum.photos/id/292/3852/2556.jpg?hmac=cPYEh0I48Xpek2DPFLxTBhlZnKVhQCJsbprR-Awl9lo',
        starNum: 10,
        name : 'coffe Point Brazil 100%',
        price : 3200,
    },
];

const SliderProductsItem = () => {

    const [CardItem, setCardItem] = useState(ProductCardItem);
    return (
    <Fragment>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                {CardItem.map((item,index)=>{
                    return(
                        <ProductCard Data={item} />
                    )
                })}
            </div>
        </div>
    </Fragment>
    );
}

export default SliderProductsItem;