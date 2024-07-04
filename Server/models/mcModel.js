const mongoose = require("mongoose")

const mcSchema = mongoose.Schema({
    mcName:{
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

 const mcModel = mongoose.model("mcModel",mcSchema)

 module.exports=mcModel
