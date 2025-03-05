import axios from "axios";
import "./List.css";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { useSearchParams } from 'react-router-dom'

export default function List() {
  const [list, setlist] = useState([]);
  const url = "http://localhost:4000/"; //change this to your server url
  const fetchlist = async () => {
    const response = await axios.get("http://localhost:4000/api/food/list");

    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error("Failed to fetch");
    }
  };
  const removefood = async (foodid) => {
    console.log(foodid);
    const response = await axios.post( `${url}api/food/remove`,{id:foodid})
        await fetchlist();
        // toast.success("Food deleted successfully");
        if (response.data.success) {
          toast.success("Food deleted successfully");
        } else {
            toast.error("Failed to delete");
            }
    }

  useEffect(() => {
    fetchlist();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
            list.map((item,index)=>(
                <div  key = {index} className="list-table-format"  >
                    <img src = {`${url}/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p onClick={() => removefood(item._id)} className="cursor">X</p>
                    {/* <p>{item._id}</p> */}
                </div>
            )) 
        }
      </div>
    </div>
  );
}
