const mongoose = require('mongoose')
const dcrypt = require('bcrypt')

let noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    created_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})

userSchema.pre('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        const document = this
        bcrypt.hash(this.password, 10,
            (err, hashedPassword) => {
                if (err)
                    next(err);
                else {
                    this.password = hashedPassword;
                    next();
                }
            });

    }
})


module.exports = mongoose.model('Note', noteSchema)