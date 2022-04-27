const mongoose = require('mongoose');

const CardsSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:false
        }
    }
)

const CardsModel=mongoose.model("cards",CardsSchema)

module.exports=CardsModel