const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  text: { type: String },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  
});

module.exports = mongoose.model('Product', productSchema);
