import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    { 
        userid: {
            type:String,
            required: true,
            ref: 'User'
        },
        items: {type: Array, required: true},
        amount: {type: Number, required: true},
        address : {type: Object, required: true},
        status: {type: String, default:"food processing"},
        isDelivered: {type: Boolean, default: false},
        date:{type: Date, default: Date.now()}

        })

const ordermodel = mongoose.models.order || mongoose.model('order', orderSchema);
export default ordermodel;