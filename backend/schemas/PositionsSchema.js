const {Schema}=require("mongoose");

const PositionsSchema=new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    isLoss:{
        type:Boolean,
        default:false
    },
    day: String,
});

module.exports={PositionsSchema};