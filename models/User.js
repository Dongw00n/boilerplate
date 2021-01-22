const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    tpye: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default:0
  },
  imang: String,
  token:{
    type: String
  },
  tokentype: {
    type: Number
  }
})


const User = mongoose.model('User', userSchema)

module.exports = { User }