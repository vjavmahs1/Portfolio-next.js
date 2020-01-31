const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const portfolioSchema = new Schema({
    userId: {type: String, required: true},
    title:  {type: String, required: true, maxLength: 256}, // {type: String, required: true, maxlength: 256} is shorthand for {type: {type: String, required: true, maxlength: 256}}
    category : {type: String, required: true},
    description: {type: String, required: true, maxLength: 2048},
    skills:   {type: String, required: true, maxLength: 256},
    link: {type: String, required: true, maxLength: 256}
  });

module.exports = mongoose.model('Portfolio',portfolioSchema)