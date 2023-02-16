const { Schema, model } = require('mongoose')

const catSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            required: true,
            trim: true
        },
        coat: {
            type: String,
            required: true,
            trim: true
        },
        breed: {
            type: String,
            required: true,
            trim: true
        },
        color: {
            type: String,
            required: true,
            trim: true
        },
        houseTrained: {
            type: Boolean,
            required: true,
            trim: true
        },
        spayNeutered: {
            type: Boolean,
            required: true,
            trim: true
        },
        shots: {
            type: Boolean,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        tags:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Class'
            }
        ]
    }
);

const Cat = model('Cat', catSchema);

module.exports = Cat;