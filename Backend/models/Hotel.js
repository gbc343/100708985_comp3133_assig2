const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    unique: [true, "Duplicate id Not allowed"],
    required: [true, 'Please enter first name'],
    trim: true,
    lowercase: true
  },
  hotel_name: {
    type: String,
    unique: [true, "Duplicate Name Not allowed"],

    required: true,
    trim: true
  },
  street:{
      type: String,
      require: true,
      trim: true
  },
  city:{
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  postal_code:{
      type:String,
      required: true
  },
  price:{
        type: Number,
        required:true
  },
  email: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    //minlength:10,
    //maxlength: 50,
    //Custom validation
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  user_id: {
    type: Number,
    required: [true, 'Please enter first name'],
    trim: true,
    lowercase: true
  }
});




const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;