const mongoose = require("mongoose")

const evtSchema = mongoose.Schema({
    evtName:{
         type:String,
        required: [true,"please input event name "],
     },

     location:{
         type:String,
         required: [true,"please picture is require"],
     },
   
    image:{
         type:String,
        required: [true,"please location is require"],
     },

   
    amount:{
        type:Number,
         required: [true,"please date is require"],
     },


    isCompleted:{
         type:Boolean
     },

},

 {timestamps:true}
 );

 const evtModel = mongoose.model("evtModel",evtSchema)

 module.exports=evtModel
