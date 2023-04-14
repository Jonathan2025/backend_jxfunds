const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const validator = require('validator')

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

    // this is where the validation happens
    if(!username || !password){
        throw Error('Both fields must be filled')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is weak, please use a stronger password.')
    }
    if (!validator.matches(username, '^[a-zA-Z0-9_.-]*$')) {
        throw Error('Username is already in use or not valid');
    } 
    else {
        console.log('Username is Valid');
    }

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