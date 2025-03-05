import foodmodel from "../models/foodModel.js";


import fs from "fs";
import path from "path";


// ADD FOOD ITEM
export const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodmodel({
        name : req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save()
        res.json({success:true , message:"Food added successfully"})
        console.log("added successfully")

    }catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}
// export {addFood}


// GET ALL FOOD ITEMS

export const listFood = async (req, res) => {
    try {
        const foods = await foodmodel.find({})
        res.json({success:true,data:foods})
    }catch(err){
        res.json({success:false,message:err})
    }
}


//remove food item

export const removeFood = async (req, res) => {
    try {
        const food = await foodmodel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () =>{
            console.log("image deleted inside the uploads")
        })
        // fs.unlink(imagePath)
        // await food.remove()
        await foodmodel.findByIdAndDelete(req.body.id)
        console.log("deleted image in the database")
        res.json({success:true,message:"Food removed successfully"})

    }
    catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}