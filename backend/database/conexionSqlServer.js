require('dotenv').config();
const BD_PORT = parseInt(process.env.BD_PORT, 10);
const mssql = require("mssql");

const connectionSettings = {
    server:     process.env.BD_SERVER,
    port:       BD_PORT,
    database:   process.env.BD_DATABASE,
    user:       process.env.BD_USER,
    password:   process.env.BD_PASSWORD,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true
    }
};

async function getConnection() {
    try {
        const pool = await mssql.connect(connectionSettings);
        console.log('Conexión exitosa a la base de datos');
        return pool;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        throw error;
    }
}


module.exports = { mssql, getConnection };

