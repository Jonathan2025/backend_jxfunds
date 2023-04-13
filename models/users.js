const bcrypt = require('bcrypt')
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: {
        type: String, 
        required: true
    }
}, {
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

// this below is allowing us to bcrypt the password and check if a username is already in use
// For figuring out bcrypt here credit goes to https://www.youtube.com/watch?v=mjZIv4ey0ps "The Net Ninja"
userSchema.statics.signup = async function (username, password) {

    const exists = await this.findOne({ username })

    if (exists) {
        throw Error('username in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, password: hash })

    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User  