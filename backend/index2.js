const sql = require('mssql');

// Configuración de la conexión a la base de datos
const config = {
  user: 'sa',
  password: 'S3guridad.2022',
  server: 'SRV-ZASCITA-SM',
  port: 2552,
  database: 'Zascita_BD',
  options: {
    encrypt: false // Si estás utilizando una conexión segura (SSL), establece esto en true
  }
};

// Función para realizar una consulta
async function consultarDatos() {
  try {
    // Conectarse a la base de datos
    await sql.connect(config);

    // Realizar la consulta
    const result = await sql.query('SELECT * FROM users');

    console.log(result.recordset); // Muestra los datos obtenidos de la consulta

  } catch (err) {
    console.error('Error al consultar la base de datos:', err);
  } finally {
    // Cerrar la conexión
    await sql.close();
  }
}

// Llamar a la función para realizar la consulta
consultarDatos();