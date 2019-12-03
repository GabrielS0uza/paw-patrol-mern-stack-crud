const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    breed: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.');
            }
        }
    },
    listVaccines: [{
        type: String,
        required: true,
        trim: true
    }]
}, {
    timestamps: true
});

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog;