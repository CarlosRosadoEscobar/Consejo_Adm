const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'S3guridad.2022',
    // server: 'tcp:SRV-ZASCITA-SM/ZASCITA,2552',
    server: 'SRV-ZASCITA-SM',
    port: 2552,
    database: 'Zascita_BD',   
};

async function connect() {
    try {
        await sql.connect(config);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error de conexión a la base de datos', error);
    }
}

module.exports = {
    connect,
    sql,
};
