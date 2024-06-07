const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const createUser = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: 'El usuario ya existe con ese email'
            });
        }

        user = new User({ name, email, password });

        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        // Generar el JWT
        const token = await generarJWT(user._id, user.name)

        res.json({
            uid: user._id,
            name: user.name,
            token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}

const loginUsuario = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                message: 'Password incorrecto'
            });
        }

        // Generar el JWT
        const token = await generarJWT(user._id, user.name);

        res.json({
            uid: user._id,
            name: user.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }


}

const revalidarToken = async(req, res) => {

    const { uid, name } = req;

    // Generar el JWT
    const token = await generarJWT(uid, name);

    res.json({
        uid,
        name,
        token
    });

}





module.exports = {
    createUser,
    loginUsuario,
    revalidarToken,
}