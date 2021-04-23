const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: true,
        trim: true,
      },
      booking_date: {
        type: String,
        required: true,
        trim: true,
      },
      booking_start: {
          type:String,
          required: true,
          trim: true
      },
      booking_end: {
        type:String,
          required: true,
          trim: true
      },
      user_id:{
        type: Number,
        required: true,
        trim: true,
      }
});



const Bookings = mongoose.model("Bookings", BookingSchema);
module.exports = Bookings;