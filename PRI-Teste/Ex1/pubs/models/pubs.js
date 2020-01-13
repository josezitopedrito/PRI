const mongoose = require('mongoose')

var elementSchema = new mongoose.Schema({
    element: Array
})

var pubSchema = new mongoose.Schema({
    id: String,
    type: String,
    authors: elementSchema,
    title: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,
    doi: String
})

module.exports = mongoose.model('pub',pubSchema)