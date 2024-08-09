const mongoose = require('mongoose');

// Definire lo schema
const projEmpl = new mongoose.Schema({
    project: {
        id: Number,
        name: String
    },
    employee: {
        id: Number,
        name: String
    },
    date: Date,
    hours: Number
}, {
    versionKey: false // disable field __v
});

// Creare il modello
const ProjectEmployee = mongoose.model('ProjectEmployee',projEmpl);

module.exports = ProjectEmployee;
