const mongoose = require('mongoose');

const Schema = mongoose.Schema

let playersSchema = new Schema ({
    playerName: {
        type: 'string',
    },
    nacionality: {
        type: 'string'
    },
    playerAge: {
        type: Number,
    },
    ligaName: {
        type: 'string'
    },

});

module.exports = mongoose.model('player', playersSchema);