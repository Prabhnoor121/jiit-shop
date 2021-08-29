const mongoose = require('mongoose')

const hostTemplate = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    verifiedId: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    liked: {
        type: Boolean
    }
})

module.exports = mongoose.model('place', hostTemplate)