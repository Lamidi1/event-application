const mongoose = require("mongoose")

const djSchema = mongoose.Schema({
    djName:{
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

 const djModel = mongoose.model("djModel",djSchema)

 module.exports=djModel
