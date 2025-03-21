import {  useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
export default function Add() {

    const [image , setimage] = useState(false)
    const [data, setdata] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangehandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setdata(data=>({...data,[name]:value}))
    }
const onsubmithandler = async(event) =>{
    event.preventDefault()
    const formdata = new FormData()
    formdata.append("name" , data.name)
    formdata.append("description" , data.description)
    formdata.append("price" , Number(data.price))
    formdata.append("category" , data.category)
    formdata.append("image",image)

    const response = await axios.post("http://localhost:4000/api/food/add",formdata)
    if (response.status === 200){
        // alert("Added successfully")
        setdata({
            name:"",
            description:"",
            price:"",
            category:"Salad"
        })
        setimage(false)
        toast.success("Added successfully")
    }
    else{
        // alert("Failed to add")
        toast.error("Failed to add")
    }
}
    

  return (
    <div className='add'>
        <form action="" className="flex-col" onSubmit={onsubmithandler}>
            <div className="add-img-upload flex-col">

                <p>Upload image</p>
                <label htmlFor="image">
                    <img src={image ?URL.createObjectURL(image) :assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input  onChange = {onChangehandler} value={data.name}  type="text" name='name' placeholder='Type here' />
            </div>

            <div className="add-product-description flex-col">

                <p>Product description</p>
                <textarea onChange = {onChangehandler} value = {data.description} name="description" rows = "6" placeholder='write content here'></textarea>
            </div>
            <div className="add-category-price">

                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select name="category">

                        {/* <option value=""></option> */}

                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Biryani">Biryani</option>
                        <option value="Pizza">Pizza</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>PRoduct price</p>
                    <input onChange={onChangehandler} value={data.price} type="number" name="price" placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
            </form>
      
    </div>
  )
}
