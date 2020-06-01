const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


let userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    
      },
      lastname: {
        type: String,
        required: true
    
      },

      email:{

        type: String,
        required: true
       
      },
      address: {
        houseNo:Number,
        street:String,
        district: String
      },

      password: {
        type: String,
        required: true
      },
      
      phone: {
        type: String,
        required: true
      },
      cart:[
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
          }
          
      ],
     
      isSeller: {
        type: Boolean,
        default: true
      },

      isAdmin: {
        type: Boolean,
        default: false
      },
    


})
const User = mongoose.model("User", userSchema);


module.exports=User;