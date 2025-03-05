import React, { useContext, useEffect, useState } from 'react'
import "./Myorders.css"
import axios from 'axios'
import { StoreContext } from '../context/Storecontext'
import { assets } from '../assets/assets'
export default function Myorders() {

    const [data,setdata] = useState([])
    const {url,token} = useContext(StoreContext)

    const fetchorders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        
        setdata(response.data.data)
        console.log(data)
        // console.log(response)
        // console.log(data.data)
    }

    useEffect(() => {
        if (token){
            fetchorders()

        }
    },[token])

  return (
    <div className='my-orders'>

        <h2>my orders resolve errors and routes conflicts</h2>

        <div className="container">
            {data.map((order,index) =>{
                return (
                    <div  key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index) =>{
                            if(index === order.items.length-1){
                                return item.name+" x "+item.quantity
                            }
                            else{
                               return item.name+" x " +item.quantity+","
                            }
                        })}</p>

                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>Pending..</b></p>
                        <button>Track Order</button>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}
