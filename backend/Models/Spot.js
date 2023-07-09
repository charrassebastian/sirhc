const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let spotSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    available: {
        type: Boolean
    }
}, {
        collection: 'spotCollection'
    }
);
module.exports = mongoose.model('Spot', spotSchema);