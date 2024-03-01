const { getConnection, mssql } = require('../../database/conexionSqlServer');

const updateUserStatusByUsername = async (username) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, username) // Parámetro del usuario
                .query('UPDATE Users SET estatus = 2 WHERE Usuario = @username');
            console.log(`Estado del usuario ${username} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

module.exports = { updateUserStatusByUsername };
