const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resturantSchema = new Schema({

    name: {
        type: String,
        trim: true,
        require: 'Please enter a resturant name!!'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String],
    created: {
        type: Date,
        default: Date.now()
    },
    location: {

        type: {
            type: String,
            default: 'Point',
        },
        coordinates: [{type: Number, required: 'Please enter the coordinates'}],
        address: {
            type: String,
            required: 'you must supply an address'
        }

    },
    photo: String,
    author: {
        type: mongoose.Schema.ObjectID,
        ref: 'user',
        required: 'Please enter the author'
    }

}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

module.exports = mongoose.model('Restaurant',resturantSchema);
