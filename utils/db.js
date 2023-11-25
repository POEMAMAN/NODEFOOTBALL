const dotenv = require ('dotenv');

dotenv.config();

const mongoose = require ('mongoose');

const mongoDb = process.env.MONGODB_URL;

const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, {});
        const { name, host } = db.connection;
        console.log(`Conectado a la Db: ${name} en el host: ${host}`);

    } catch (error) {
        console.log(`No se ha podido conectar a la DB`, error)
    }
}

module.exports = { connect };