const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


let userSchema = new mongoose.Schema({


   username:{

        type: String,
        required: true
      },
     
      password: {
        type: String,
        required: true
      },
      
      phone: {
        type: Number,
        required: true
      },

      isAdmin: {
        type: Boolean,
        default: false
      },
    


})
const User = mongoose.model("User", userSchema);


module.exports=User;