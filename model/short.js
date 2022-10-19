const mongoose=require('mongoose');
const shortId=require('shortid');

const shortUrlSchema= new mongoose.Schema({
    full:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    short:{
        type:String,
        required:true,
        default:shortId.generate
    },
  
})
module.exports=mongoose.model("shortUrl",shortUrlSchema);