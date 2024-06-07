const Evento = require('../models/Evento');



const getEvents = async (req, res) => {

    const eventos = await Evento.find().populate('user', 'name');

    res.json({
        eventos,
    })

}


const createEvent = async (req, res) => {

    const { title, notes, start, end } = req.body;

    const evento = new Evento({title, notes, start, end, user: req.uid});


    try {
        
        const eventoGuardado = await evento.save();

        res.status(201).json({
            evento: eventoGuardado
        });


    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }

}

const updateEvent = async (req, res) => {

    const eventoId = req.params._id;

    try {
        
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                message: 'Evento no existe'
            });
        }

        if (evento.user.toString() !== req.uid) {
            return res.status(401).json({
                message: 'No tiene privilegio para editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});

        res.json({
            evento: eventoActualizado
        });


    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}

const deleteEvent = async (req, res) => {

    const eventoId = req.params._id;

    try {
        
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                message: 'Evento no existe'
            });
        }

        if (evento.user.toString() !== req.uid) {
            return res.status(401).json({
                message: 'No tiene privilegio para eliminar este evento'
            });
        }

        await Evento.findByIdAndDelete(eventoId);

        res.json({
            message: 'Evento eliminado'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}


module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

