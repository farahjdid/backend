const mongoose = require('mongoose');

const Rsv = mongoose.model('Rsv', {

    idsalle: {
        type: String,
        required: true
    },
    iduser: {
        type: String,
        required: false
    },
    date_debut: {   
        type: String,
        required: true
    },
    date_fin: {
        type: String,
        required: true
    },
    description: {
        type: String,   
        required: true
    },
    sujet: {
        type: String,   
        required: true
    }

})

module.exports = Rsv;