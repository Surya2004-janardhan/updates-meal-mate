import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [food_list, setfoodlist] = useState([]);
  const [cartitems, setcartitems] = useState({});
  const [token, settoken] = useState("");

 

  const fetchcartitems = async () => {
    if (token) {
      try {
        const response = await axios.get(`${url}/api/cart/get`, {
          headers: { authorization: token },
        });
        setcartitems(response.data.cartData);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    }
  };

  const addtocart = async (itemid) => {
    console.log(itemid)
   if (!cartitems[itemid]) {
    setcartitems((prev) => ({...prev, [itemid]:1}))
   }
   else{
    setcartitems((prev) => ( { ...prev,[itemid]:prev[itemid]+1}))
   }
    if (token) {
      try {
        await axios.post(
          url+"/api/cart/add",
          { itemid:itemid }, 
          // try to change those paramater passing as objects or singular forms... they might dont take data sometimes and doesnt produce any error also...
          { headers: {  token } }
        );
        console.log(token)
      } catch (error) {
        console.error("Failed to add item to cart:", error);
      }
    }
  };

  const removefromcart = async (itemid) => {
    setcartitems((prev) =>({...prev, [itemid]:prev[itemid]-1}))
    if(token){
      await axios.post(url+"/api/cart/remove",{itemid},{headers : {token}})
    }
  };

  

   

  const loadcartdata = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      setcartitems(response.data.cartData);
    } catch (error) {
      console.error("Failed to load cart data:", error);
    }
  };

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitems[item];
      }
    }
    return totalamount;
  };
  // const fetchf/oodlist = async


  const fetchfoodlist = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setfoodlist(response.data.data);
    } catch (error) {
      console.error("Failed to fetch food list:", error);
    }
  };


  // const loadcartdata


  useEffect(() => {
    
    async function loaddata() {
      await fetchfoodlist()

    if (localStorage.getItem("token")){
      settoken(localStorage.getItem("token"))
      await loadcartdata(localStorage.getItem("token"))
    }
      
    }
    loaddata();

  },[]) 

  const contextvalue = {
    food_list,
    cartitems,
    addtocart,
    removefromcart,
    setcartitems,
    gettotalcartamount,
    url,
    token,
    settoken,
  };

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};
