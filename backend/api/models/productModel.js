const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Loại bỏ khoảng trắng đầu cuối
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Product', productSchema);