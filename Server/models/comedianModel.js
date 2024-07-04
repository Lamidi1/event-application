const mongoose = require("mongoose")

const comedianSchema = mongoose.Schema({
    comedianName:{
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

 const comedianModel = mongoose.model("comedianModel",comedianSchema)

 module.exports=comedianModel
