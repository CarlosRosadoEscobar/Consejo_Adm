const { getConnection, mssql } = require('../../database/conexionSqlServer');

const getUsuarios = async () => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Data Usuarios devuelto correctamente');
            const result = await pool.request().query('SELECT * FROM Users where Usuario = edangel ');
            return result.recordset;
        } else {
            console.error('Error: Objeto pool no devuelto');
            return [];
        }
    } catch (error) {
        console.log(error);
        return []; 
    }
}

module.exports = { getUsuarios };  
