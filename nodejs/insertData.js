const connectDB = require('./config/mongoose');
const ProjectEmployee = require('./models/projectEmployee');
const mongoose = require('mongoose'); 
// connect to mongo
connectDB();

const documents = [
    {
        project: { id: 1, name: "Mars Rover" },
        employee: { id: 1, name: "Mario" },
        date: new Date("2021-08-26T22:00:00.000Z"),
        hours: 5
    },
    {
        project: { id: 2, name: "Manhattan" },
        employee: { id: 2, name: "Giovanni" },
        date: new Date("2021-08-30T22:00:00.000Z"),
        hours: 3
    },
    {
        project: { id: 1, name: "Mars Rover" },
        employee: { id: 1, name: "Mario" },
        date: new Date("2021-08-31T22:00:00.000Z"),
        hours: 3
    },
    {
        project: { id: 1, name: "Mars Rover" },
        employee: { id: 3, name: "Lucia" },
        date: new Date("2021-08-31T22:00:00.000Z"),
        hours: 3
    },
    {
        project: { id: 2, name: "Manhattan" },
        employee: { id: 1, name: "Mario" },
        date: new Date("2021-08-26T22:00:00.000Z"),
        hours: 2
    },
    {
        project: { id: 2, name: "Manhattan" },
        employee: { id: 2, name: "Giovanni" },
        date: new Date("2021-08-31T22:00:00.000Z"),
        hours: 4
    }
];

// Insert documents
ProjectEmployee.insertMany(documents)
    .then(() => {
        console.log("Dati inseriti con successo");
        mongoose.connection.close(); // close connection after insert
    })
    .catch(err => {
        console.error("Errore durante l'inserimento dei dati:", err);
        mongoose.connection.close();  // close connection after error
    });
