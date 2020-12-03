const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    passowrd: { type: String, required: true },
    update_at: {type: Date, default: Date.now},
    created_at: {type: Date, default: Date.now},

})

module.exports = mongoose.model('User', userSchema)