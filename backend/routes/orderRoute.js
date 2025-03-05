import {userorders, placeOrder, listorders } from "../controllers/orderController.js";
import express from "express";
import { authMiddleware } from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

orderRouter.post("/userorders", authMiddleware, userorders);
orderRouter.get("/list",listorders)
export default orderRouter;
// Compare this snippet from backend/routes/cartRoute.js:
// import express from 'express';
