const mongoose = require('mongoose')
const Schema =mongoose.Schema

const moduleSchema = new Schema ({
    moduleName :String,
    moduleDescription:String,
    date: { type: Date, required: true, default: Date.now },
    user: { type: Schema.ObjectId, ref: 'user' },
})

const MODULE = mongoose.model('module', moduleSchema);

module.exports = MODULE;