import React, { useEffect } from 'react';
import Navbar from './NavBar';
import Banner from './Banner';
import { Box } from '@mui/material';

// import { Style } from '@mui/icons-material';
import styled from '@emotion/styled';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
    padding:10px;
    background: #F2F2F2

`

const Home = () => {

  const {products} =  useSelector(state => state.getProducts);

  console.log(products);  


    const dispatch =  useDispatch(); 

    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])

  return (
    <>
      <Navbar/>
      <Component>
        <Banner/>
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection />
        <Slide products={products} title="Discount for You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's top picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/>
      </Component>
    </>
  )
}

export default Home