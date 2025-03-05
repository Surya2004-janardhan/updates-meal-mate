import express from 'express';
// import {addToCart, getCart, removefromCart} from '../models/cartModel.js'/
// ;

import { authMiddleware } from '../middleware/auth.js';

import { addToCart, getCart ,removeFromCart } from '../controllers/cartController.js';
// import { authCheck } from '../middlewares/authMiddleware.js';

const cartRouter = express.Router();

cartRouter.post('/add' ,authMiddleware,addToCart)
cartRouter.post('/get', authMiddleware,getCart);
cartRouter.post('/remove', authMiddleware,removeFromCart);
// cartRouter.post('/empty', authMiddleware,emptyCart);

export default cartRouter;


