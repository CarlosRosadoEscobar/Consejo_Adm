const { getConnection, mssql } = require('../../database/conexionSqlServer');

const alertasUser = async (username) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, username) // Parámetro del usuario
                .query('UPDATE Users SET estatus = 2 WHERE Usuario = @username');
                // SELECT * FROM alertas_login
            console.log(`Estado del usuario ${username} actualizado correctamente.`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

module.exports = { alertasUser };


/* 

quiero crear una tabla en sql server que se llame historial_inicio_sesion
y quiero que tenga de columnas
usuario
id_colaborador: null,
Nombre: 'Angel',
Apellido: 'Gonzalez',
Area: 'Operaciones',
Puesto: 'Analista programador',
estatus: '1',
role: 'admin'
duracion_sesion
tiempo_Inicio_Sesion
fecha_de_incio_sesion

quiero crear una tabla en sql server que se llame alertas_login
y quiero que tengan de columnas
usuario
password
fecha
hora

*/


