const mongoose = require("mongoose")

const signinuserSchema = mongoose.Schema({
    email:{
         type:String,
        required: [true,"please input event name "],
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

 const signinuserModel = mongoose.model("signinuserModel",signinuserSchema)

 module.exports=signinuserModel
