const mongoose = require("mongoose")

const soundSchema = mongoose.Schema({
    soundName:{
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

 const soundModel = mongoose.model("soundModel",soundSchema)

 module.exports=soundModel
