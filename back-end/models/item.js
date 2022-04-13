// Schema for an Item. Same format as the item model in FakeData.json
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
    default: "http://dummyimage.com/118x100.png/ff4444/ffffff",
  },
  posted_by: {
    type: String,
    required: true,
  },
  purchased_by: {
    type: String,
    required: false,
    default: "",
  },
  item_status: {
    type: String,
    required: true,
    default: "available",
  },

});

//export schema
module.exports = mongoose.model('Item', ItemSchema);

