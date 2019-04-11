const mongoose = require('mongoose')


let schema=mongoose.Schema({
    name:String,
    description:[String],
    category:String, // shirt,top
    gender:String,
    brand:String, 
    model:String, //model should be the same across varients
    category:String,
    varient:{ // each unique set will be a varient,fileds can be empty
           color:String,
           tags:[String],//formal,full sleve
           weight:{
               value:Number, // 38,42 etc
               unit:String,//Like S,M,XL etc
           }, 
           size:{
            value:Number, // 38,42 etc
            band:String,//Like S,M,XL etc
            }, 
            
    },
    images:[{
        tag:String,
        name:String,
        altText:String,
        url:String,
        size:String,
    }],   
    price:{
        value:Number,
        currencyIsoCode:String,
    }, 
    
    
    nfcCode:String,
    inventory:
    {
    section:String,
    subsection:String,
    subsection_pic:[{
        url:String,
    }],
    facing:String,
    level:Number,
    stock:String,
    }
})

module.exports = mongoose.model('video_pro_structure',schema)