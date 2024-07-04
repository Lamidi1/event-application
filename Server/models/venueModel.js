const mongoose = require("mongoose")

const venueSchema = mongoose.Schema({
    venueName:{
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

 const venueModel = mongoose.model("venueModel",venueSchema)

 module.exports=venueModel
