const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: true,
        message: 'El título es obligatorio'
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        message: 'El usuario es obligatorio'
    }
}, {
    versionKey: false,
});

module.exports = model('Evento', EventoSchema);