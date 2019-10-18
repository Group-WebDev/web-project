const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  address:{
      type:String,
      required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
      type:String,
      required:true
  },

  done: {
    type: Boolean,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;