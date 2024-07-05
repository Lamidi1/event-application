const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
         type:String,
        required: [true,"please input event name "],
     },

     username:{
         type:String,
         required: [true,"please picture is require"],
     },
   
    gender:{
         type:String,
        required: [true,"please location is require"],
     },

    email:{
        type:String,
        required: [true,"please time is require"],
        // unique:[true,"email has already being used"],
     },

    nationality:{
        type:String,
         required: [true,"please date is require"],
     },

     dateofBirth:{
        type:String,
         required: [true,"please regular is require"],
     },

     password:{
        type:String,
         required: [true,"please regular is require"],
     },


    isCompleted:{
         type:Boolean
     },

},

 {timestamps:true}
 );

 const userModel = mongoose.model("userModel",userSchema)

 module.exports=userModel
