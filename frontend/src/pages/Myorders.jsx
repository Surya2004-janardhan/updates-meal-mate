import  { useContext, useEffect, useState } from 'react'
import "./Myorders.css"
import axios from 'axios'
// import toast from "react-toastify"
import { StoreContext } from '../context/Storecontext'
import { assets } from '../assets/assets'
export default function Myorders() {

    const [data,setdata] = useState([])
    const {url,token} = useContext(StoreContext)

    const fetchorders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        
        setdata(response.data.data)
        console.log(data)
        // toast.success("placed ")
        // console.log(response)
        // console.log(data.data)
    }

    useEffect(() => {
        if (token){
            fetchorders()
            // toast.success("Order placed successfully!", { autoClose: 3000 })

        }
    },[token])

// https://github.com/Surya2004-janardhan/updates-meal-mate

  return (
    <div className='my-orders'>

        <h3>All your Orders</h3>
        {/* <toast className="succ"></toast> */}
        {/* {toast.success("Placed order Successfully")} */}

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
        <div className='empty'>
            <div className='empty1'>
                ---Order More---
            </div>

        </div>
      
    </div>
  )
}
