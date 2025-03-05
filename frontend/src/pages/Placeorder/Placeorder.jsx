import React, { useContext, useEffect, useState } from "react";
import "./Placeorder.css";
import {toast} from "react-toastify"
import axios from "axios";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";
export default function Placeorder() {
  const [data,setdata] = useState({
    firstname : "",
    lastname : "",
    email: "",
    street: "",
    city: "",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const oncahngehandler = (event) =>{
    const name = event.target.name
    const value = event.target.value 
    setdata(data=>({...data,[name]:value}))
  }
  const { gettotalcartamount,token,food_list, cartitems,url} = useContext(StoreContext);


  // useeffect

  useEffect(()=>{

console.log(data)
  },[data])

  const placeorder = async(event) => {
    event.preventDefault()

    let orderitems = []
    food_list.map((item) =>{
      if (cartitems[item._id]>0){
        let iteminfo = item ;
        iteminfo["quantity"] = cartitems[item._id]
        orderitems.push(iteminfo)
      }
    })
    console.log(orderitems)
    let orderdata = {
      address:data,
      items:orderitems,
      amount:gettotalcartamount()+5,


    }

    let response = await axios.post(url+"/api/order/place",orderdata,{headers:{token}})
    // console.log(response)
    if (response.data.success){
      // window.location.replace("https://github.com/razorpay/razorpay-node/blob/master/documents/items.md")
      navigate("/myorders")
      console.log("ordered data saved")
    }
    else{
      // console.log("error in saving data to mongo by backend")
      toast.error("Unable to Proceed to payment")
      // window.location.replace("https://github.com/razorpay/razorpay-node/blob/master/documents/items.md")
    }

  }
const navigate = useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/cart')
    }
    else if(gettotalcartamount() == 0){
      navigate("/cart")
    }

  },[token])
  
  return (
    <form  onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input required name = "firstname"type="text" onChange={oncahngehandler} value={data.firstname} placeholder="first name" />
          <input required name = "lastname" type="text" onChange={oncahngehandler} value={data.lastname} placeholder="last name" />
        </div>
        <input  required name = "email" onChange={oncahngehandler} value = {data.email} type="email" placeholder="email address" />
        <input required name = "street" onChange={oncahngehandler} value = {data.street} type="text" placeholder="street" />
        <div className="multi-fields">
        <input required name = "city" onChange={oncahngehandler} value = {data.city} type="text" placeholder="city" />
       
        <input required name = "state" onChange={oncahngehandler} value = {data.state} type="text" placeholder="state" />
      </div>
      <div className="multi-fields">
        <input  required name = "zipcode" onChange={oncahngehandler} value = {data.zipcode} type="text" placeholder="zip code" />
        <input  required name = "country" onChange={oncahngehandler} value = {data.country} type="text" placeholder="country" />
      </div>
      <input  required name = "phone" onChange={oncahngehandler} value = {data.phone} type="text" placeholder="phone number" />

      <div className="place-order-right">
      
        
        
        
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-Total</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery Fee</p>
              <p>${gettotalcartamount()===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              {/* {console.log(gettotalcartamount)} */}
              <b>${gettotalcartamount()===0?0:gettotalcartamount() +5}</b>
            </div>
            <button type="submit"> Proceed to payment</button>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
}
