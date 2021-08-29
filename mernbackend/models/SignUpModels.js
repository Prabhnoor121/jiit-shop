// mongoose will help to create schema

const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)