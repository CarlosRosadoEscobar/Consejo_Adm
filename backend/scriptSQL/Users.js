const { getConnection, mssql } = require('../database/conexionSqlServer');

const getUsuarios = async () => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Objeto pool devuelto correctamente');
            const result = await pool.request().query("SELECT prv,role FROM Users");
            // console.log(result.recordset);
            console.table(result.recordset)
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.log(error);
    }
}


getUsuarios();
