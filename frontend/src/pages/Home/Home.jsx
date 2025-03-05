import React from 'react'
import "./Home.css"
import { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/Appdowload/Appdownload'
// import ExploreMEnu from '../../components/ExploreMenu/ExploreMenu'
export default function Home() {

    const [category , setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setcategory = {setcategory} />
      <FoodDisplay category = {category}/>
      <Appdownload/>
    </div>
  )
}
