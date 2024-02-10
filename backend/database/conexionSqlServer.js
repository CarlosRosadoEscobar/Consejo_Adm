const mssql = require("mssql");

const connectionSettings = {
    server: 'SRV-ZASCITA-SM',
    port: 2552,
    database: 'Zascita_BD',
    user: 'sa',
    password: 'S3guridad.2022',
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

