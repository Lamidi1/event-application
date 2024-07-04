const mongoose = require("mongoose")

const dancerSchema = mongoose.Schema({
    dancerName:{
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

 const dancerModel = mongoose.model("dancerModel",dancerSchema)

 module.exports=dancerModel
