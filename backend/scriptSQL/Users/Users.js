const { getConnection, mssql } = require('../../database/conexionSqlServer');

const getUsuarios = async () => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Data Usuarios devuelto correctamente');
            const result = await pool.request().query("SELECT id_colaborador, Nombre, Apellido, usuario, Area, Puesto, estatus, prv, estado, Telefono, role, CONVERT(VARCHAR(MAX), DECRYPTBYPASSPHRASE('password', contraseña)) AS decrypted_contraseña FROM Users");
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

const getloginExitoso = async () => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Data Usuarios devuelto correctamente');
            const result = await pool.request().query("SELECT * FROM user_inicio_sesion UIS INNER JOIN Users U ON UIS.usuario = U.usuario");
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

module.exports = { getUsuarios, getloginExitoso };  
