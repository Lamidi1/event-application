const mongoose = require("mongoose")

const musicSchema = mongoose.Schema({
    musicName:{
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

 const musicModel = mongoose.model("musicModel",musicSchema)

 module.exports=musicModel
