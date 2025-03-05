import express from "express"
import mongoose from "mongoose"
import cors from  "cors"
import userRouter from "./routes/userRoute.js"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
const app = express()

const port = 4000

// middleware

app.use(express.json())

app.use(cors())

// connect to mongodb
connectDB();
// connectDB().then(() => console.log("Connected to MongoDB")).catch(err => console.log(err))


// routes
// api endpoints
app.use("/api/cart", cartRouter)
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.use("/api/order",orderRouter)

app.use("/images", express.static("uploads"))


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


// mongodb+srv://foodie:xzZ0U6XawpnBJdFh@cluster0.brvjn.mongodb.net/?