const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
      required: [true, "please input event name "],
    },

    picture: {
      type: String,
      required: [true, "please picture is require"],
    },

    location: {
      type: String,
      required: [true, "please location is require"],
    },

    time: {
      type: String,
      required: [true, "please time is require"],
    },

    amount: {
      type: String,
      required: [true, "please amount is require"],
    },

    date: {
      type: String,
      required: [true, "please date is require"],
    },

    descriptionForVip: {
      type: String,
      required: [true, "please date is require"],
    },

    descriptionForRegular: {
      type: String,
      required: [true, "please date is require"],
    },

    descriptionForFive: {
      type: String,
      required: [true, "please date is require"],
    }
  },

  { timestamps: true }
);

const eventModel = mongoose.model("eventModel", eventSchema);

module.exports = eventModel;
