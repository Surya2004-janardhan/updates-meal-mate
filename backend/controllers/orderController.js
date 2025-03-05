import ordermodel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// import Razorpay from "razorpay";

// import express 

// var instance = new Razorpay({
//   key_id: 'rzp_test_qa0WkL3BNUfGQH',
//   key_secret: 'So3hlCC5eYS7GCZuE3aBfUga',
// });
export const userorders = async (req,res) =>{
  try{
    const orders = await ordermodel.find({userid:req.body.userid})
    res.json({success:true,data:orders}
      // console.log(orders)
      

    )
    // console.log(orders)
    // console.log("userorders backend called")

  }
  catch(err){
    res.json({success:false,message:err})
  }
}

export const placeOrder = async (req, res) => {

  // const frontend/_url = "http://localhost:5173"
  // console.log(req.body)
  // console.log(req.body.userid)

  try {
    // const { userid, items, amount, address } = req.body;
     
    // Create a new order in the database
    const neworder = new ordermodel({
      userid:req.body.userid,
      items:req.body.items,
      amount:req.body.amount,
      address:req.body.address
    });
    console.log("neworder",neworder)
    await neworder.save();

    
    // Clear the user's cart
    await userModel.findByIdAndUpdate(req.body.userid, { cartData: {} });

    // Prepare line items for Razorpay order
    // const line_items = items.map((item) => ({
    //   name: item.name,
    //   amount: item.price * 100 * 80, // Convert to paise
    //   currency: "INR",
    //   quantity: item.quantity
    // }));

    // // Add delivery charges
    // line_items.push({
    //   name: "Delivery charges",
    //   amount: 2 * 100 * 80, // Convert to paise
    //   currency: "INR",
    //   quantity: 1
    // });

    // // Create an order with Razorpay
    // const options = {
    //   amount: amount * 100 * 80, // Convert to paise
    //   currency: "INR",
    //   receipt: neworder._id.toString(),
    //   payment_capture: 1,
    //   notes: {
    //     address: address
    //   }
    // };

    // const razorpayOrder = await instance.orders.create(options);

    res.json({
      success: true,
      // order: neworder,
      // razorpayOrder
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed to place order");
  }
}


export const listorders = async(req,res) => {

  try{
    const orders = await ordermodel.find({})
    res.json({success:true,data:orders})
  }
  catch{
    res.json({success:true,message:"error"})
  }

}