const mongoose = require('mongoose');

const Schema = mongoose.Schema

let ligasSchema = new Schema ({
    ligaName: {
        type: 'string',
    },
    description: {
        type: 'string'
    },
    firstMatch: {
        type: Number,
    },
});

module.exports = mongoose.model('liga', ligasSchema);
