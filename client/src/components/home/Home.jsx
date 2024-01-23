//import React from 'react'

import {useEffect} from 'react';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch,useSelector} from "react-redux";
import Slide from "./Slide";
import NavBar from './NavBar'
import Banner from './Banner'
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import {styled,Box} from '@mui/material'
const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;






const Home = () => {

  const {products}= useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( getProducts())
   },[dispatch])

  return (
    <>
      <NavBar/>
      <Component>
        <Banner/>
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false}/>
     <Slide products={products} title="Suggesting items" timer={false}/>
     <Slide products={products} title="Top Selections" timer={false}/>
     <Slide products={products} title="Recommended Items" timer={false}/>
     <Slide products={products} title="Trending Offers" timer={false}/>
     <Slide products={products} title="Your favourites" timer={false}/>
     <Slide products={products} title="Seasons's Top Deals" timer={false}/>
        </Component>
      
    </>
  )
}

export default Home
