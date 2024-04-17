import React from 'react';
import Description from '../components/MainPage/Description';
import Products from "../components/MainPage/Products"
import Advantages from '../components/MainPage/Advantages';
import Ecosystem from '../components/MainPage/Ecosystem';
import Partners from '../components/MainPage/Partners';

export default function Main() {
  return (
    <div>
      <Description />
      <Products />
      <Advantages />
      <Ecosystem />
      <Partners />
    </div>
  )
}
