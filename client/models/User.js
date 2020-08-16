const Mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10
    },
    class: {
        type: Number,
        unique: 1,
        maxlength: 1,
        minlength: 1
    },
    pnum: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }