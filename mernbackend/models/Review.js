
const mongoose = require('mongoose')

const reviewTemplate = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true,
    },
    placeId: {
        type: String,
        required: true
    },
    placeName: {
        type: String,

    },


    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('review', reviewTemplate)