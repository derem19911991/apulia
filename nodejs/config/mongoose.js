const mongoose = require('mongoose');
require('dotenv').config();
// Funzione per connettersi a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        });
        console.log("Connesso a MongoDB");
    } catch (err) {
        console.error("Errore di connessione a MongoDB:", err);
        process.exit(1); // Uscita dall'applicazione in caso di errore
    }
};

module.exports = connectDB;
