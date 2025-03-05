import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'
export default function FoodDisplay({category}) {
    // console.log(food_list)
    const {food_list } = useContext(StoreContext)
    console.log(food_list)
  return (
    <div>
      <div className="food-display" id="food-display">

        <h2>Top dishes near your</h2>

        <div className="food-display-list">
            {food_list.map((item,index) => {
                if (category==="All" || category === item.category)
                {
                return <FoodItem key = {index} id = {item._id} name={item.name} description ={item.description} price={item.price} image = {item.image}/>}
            })}
        </div>
      </div>
    </div>
  )
}
