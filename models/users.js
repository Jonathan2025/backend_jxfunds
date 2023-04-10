const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = mongoose.Schema({
    username: {type: String, uniquew: true, required: true},
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User  