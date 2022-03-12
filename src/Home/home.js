import React , {Fragment, state} from 'react'
import Header from '../Header/Header'
import SliderItem from './slider/SliderItem'
import SliderProductsBox from './sliderProducts/SliderProductsBox';
import AboutCoffeShop from './about/AboutCoffeShop';
import NewsBox from './news/NewsBox';
import Comment from './comment/Comment';
import Footer from '../footer/Footer';
import MenuPage from '../menu/MenuPage';

const Home = () => {

  return (
    <Fragment>
        {/* <Header /> */}
        {/* <MenuPage /> */}
        <SliderItem />
        <SliderProductsBox />
        <AboutCoffeShop />
        <NewsBox />
        {/* <Comment /> */}
        <Footer />
    </Fragment>
  )
}

export default Home