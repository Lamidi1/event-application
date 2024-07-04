const mongoose = require ("mongoose")
const discovervenueSchema = mongoose.Schema({

    eventName:{
        type:String,
       required: [true,"please input event name "],
    },

    location:{
        type:String,
       required: [true,"please location is require"],
    },
    picture: {
        type: String,
        required: [true, "please picture is require"],
      },
    
    isCompleted:{
        type:Boolean
    },
},
{timestamps:true}
);
const discovervenueModel = mongoose.model("discovervenueModel",discovervenueSchema)

module.exports=discovervenueModel
