const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: String,
    author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
