const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        message: 'El nombre es obligatorio'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        message: 'El correo es obligatorio'
    },
    password: {
        type: String,
        required: true,
        message: 'La contraseña es obligatoria'
    }
}, {
    versionKey: false,
});

module.exports = model('User', UserSchema);