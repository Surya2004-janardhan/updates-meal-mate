import userModel from "../models/userModel.js"; // Correct import

// ✅ Add to Cart
export const addToCart = async (req, res) => {
  try {
  

    let userdata = await userModel.findById({_id:req.body.userid});
    // change to findbyid if something from frontend gives error
   

    let cartData =await userdata.cartData || {};
    if (!cartData[req.body.itemid]) {
      // return res.status(404).json({ msg: "User not found" });
      cartData[req.body.itemid] = 1
    }
    else{
      cartData[req.body.itemid] += 1
    }

    // above add to cart is fine for backend + db but has to verify for the frontend part


    await userModel.findByIdAndUpdate(req.body.userid,{cartData})
    res.json({ success: true, cartData:cartData ,message:"added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to add to cart" });
  }
};

// ✅ Get Cart
export const getCart = async (req, res) => {
  try {
  

    let userdata = await userModel.findById({_id:req.body.userid});
    // change to findbyid if something from frontend gives error
   

    let cartData =await userdata.cartData || {};
   

    // above add to cart is fine for backend + db but has to verify for the frontend part


    
    res.json({ success: true, cartData:cartData ,message:"get all items from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to load all the item from the cart" });
  }
};



// below one is fine for the backend + db part

// ✅ Remove from Cart
export const removeFromCart = async (req, res) => {
  try {
  

    let userdata = await userModel.findById({_id:req.body.userid});
    // change to findbyid if something from frontend gives error
   

    let cartData =await userdata.cartData || {};
    if (cartData[req.body.itemid]>0) {
      // return res.status(404).json({ msg: "User not found" });
      cartData[req.body.itemid] -= 1
    }
    // await userModel.findByIdAndUpdate(req.body.userid,{cartData})




    // above add to cart is fine for backend + db but has to verify for the frontend part


    await userModel.findByIdAndUpdate(req.body.userid,{cartData})
    res.json({ success: true, cartData:cartData ,message:"removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to remove from the cart" });
  }
};
