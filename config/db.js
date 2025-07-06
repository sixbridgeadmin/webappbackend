const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB =async () => {
    try{
        console.log('Intentando conectar a:', process.env.DB_MONGO ? 'DB configurada' : 'DB NO configurada');
        await mongoose.connect(process.env.DB_MONGO);
        console.log('DB Conectada');
    } catch (error){
        console.log('Hubo un error.');
        console.log(error);
        process.exit(1);
    }
}
module.exports = conectarDB;