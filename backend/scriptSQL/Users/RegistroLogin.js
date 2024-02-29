
const { getConnection, mssql } = require('../../database/conexionSqlServer');

const insertarAlertaLogin = async (usuario, password, fecha, hora) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, usuario)
                .input('password', mssql.NVarChar, password)
                .input('fecha', mssql.NVarChar, fecha)
                .input('hora', mssql.NVarChar, hora)
                .query('INSERT INTO usuarios_bloqueados (usuario, password, fecha, hora) VALUES (@username, @password, @fecha , @hora)');
            console.log(`Estado del usuario ${username} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

const credencialesFallidas = async (usuario, password, fecha, hora) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, usuario)
                .input('password', mssql.NVarChar, password)
                .input('fecha', mssql.NVarChar, fecha)
                .input('hora', mssql.NVarChar, hora)
                .query('INSERT INTO credencialesFallidas (usuario, password, fecha, hora) VALUES (@username, @password, @fecha , @hora)');
            console.log(`Estado del usuario ${username} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

const registroInicioDeSesion = async (usuario, fecha, hora) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, usuario)
                .input('fecha', mssql.NVarChar, fecha)
                .input('hora', mssql.NVarChar, hora)
                .query('INSERT INTO user_inicio_sesion (usuario, fecha, hora) VALUES (@username, @fecha , @hora)');
            console.log(`Estado del usuario ${username} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

module.exports = { insertarAlertaLogin, credencialesFallidas, registroInicioDeSesion };
