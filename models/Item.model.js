const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  Brand: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  IBAN: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
