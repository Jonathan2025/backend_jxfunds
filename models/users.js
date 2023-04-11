const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: String
}, {
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User  