const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            message: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRETORPRIVATEKEY
        );

        req.uid = uid;
        req.name = name;

        next();

    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }


}

module.exports = {
    validarJWT,
}