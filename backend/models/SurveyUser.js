const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Survey
let User = new Schema({
  "Name of employee you would like to evaluate": {
    type: String
  },
  "How likely is it that you would recommend this employee to a colleague": {
    type: String
  },
  "How often is this employee is late to work":{
   type: String
  },
  "In a week are the hours clocked by this employee is greater than,fewer than,or about same as the hours actually worked":{
   type: String
  },
  "How much attention to detail does this employee have": {
    type: String
  },
  "How good is the quality of this employee": {
    type: String
  },
  "How productive is this employee work": {
    type: String
  },
  "How well does he/she work with others": {
   type: String
  },
  "How well does he/she solve problems independently": {
   type: String
  },
  "How proactive is this employee": {
    type: String
  },
   "How well does this employee handle criticism of their work": {
    type: String
  },
  "How well does this employee adjust to changing priorities": {
   type: String
  },
   "Please list any areas where this employee is doing particularly well": {
   type: String
  },
  "Please list any areas for improvement of this employee": {
  type: String
  }
  },{
  collection: 'Surveyresponse'
});

module.exports = mongoose.model('Employee', User);
