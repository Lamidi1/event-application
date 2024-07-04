const mongoose = require("mongoose")

const allSchema = mongoose.Schema({
    allName:{
         type:String,
        required: [true,"please input event name "],
     },

     picture:{
         type:String,
         required: [true,"please picture is require"],
     },
   
    isCompleted:{
         type:Boolean
     },

},

 {timestamps:true}
 );

 const allModel = mongoose.model("allModel",allSchema)

 module.exports=allModel
