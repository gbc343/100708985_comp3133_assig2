const Hotel = require('./models/Hotel');
const Bookings = require('./models/Bookings')
const User = require('./models/User')
exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.find({"hotel_name": args.hotel_name});
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city": args.city});
        },
        getBookings: async (parent, args) => {
            return await Bookings.find({});
        },
        getUser: async (parent, args) => {
            return await User.find({});
            },
            getUserByPassword: async (parent, args) => {
                return await User.find({"password": args.password, "username": args.username});
            },
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            // const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            // const isValidEmail =  emailExpression.test(String(email).toLowerCase())
   
            // if(!isValidEmail){
            //     throw new Error("email not in proper format")
            // }
            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id
            });
        return await newHotel.save();
      },
      
    addBooking: async (parent, args) => {
        console.log(args)
        let newBooking = new Bookings({
            hotel_id: args.hotel_id,
            booking_date: args.booking_date,
            booking_start: args.booking_start,
            booking_end: args.booking_end,
            user_id: args.user_id
        });
    return await newBooking.save();
  },

    addUser: async (parent, args) => {
        console.log(args)
        let newUser = new User({
            user_id: args.user_id,
            username: args.username,
            password: args.password,
            email: args.email
        });
    return await newUser.save();
}

    
}


}