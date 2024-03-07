
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
                .query('INSERT INTO user_inicio_sesion (usuario, fecha_login, hora) VALUES (@username, @fecha , @hora)');
            console.log(`Estado del usuario ${usuario} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

const cambioEstatus = async (usuario) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, usuario)
                .query('UPDATE Users SET estatus = 0 WHERE Usuario = @username');
                // UPDATE Users SET estatus = 0 WHERE Usuario = @username;

            console.log(`Estado del usuario ${usuario} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

const verifiacionSms = async (usuario, fecha, hora, codigoSmsString) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('usuario', mssql.NVarChar, usuario)
                .input('fecha', mssql.NVarChar, fecha)
                .input('hora', mssql.NVarChar, hora)
                .input('codigosms', mssql.NVarChar, hora)
                .query('INSERT INTO smsUsuarios (usuario, fecha, hora, codigosms) VALUES (@usuario, @fecha , @hora, @codigosms)');
            console.log(`Estado del usuario ${usuario} actualizado correctamente. SMS`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

const setcodigosms = async (codigoSms) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            const result = await pool.request()
                .input('codigoSms', mssql.NVarChar, codigoSms)
                .query('SELECT * FROM smsUsuarios WHERE codigosms = @codigoSms');
            console.log(`Estado del usuario actualizado correctamente. SMS`);
            return result.recordset; 
        } else {
            console.error('Error: Objeto pool no devuelto');
            return [];
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
        return [];
    }
}

const cambioEstatusSms = async (usuario) => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Conexión a la base de datos exitosa');
            await pool.request()
                .input('username', mssql.NVarChar, usuario)
                .query('UPDATE Users SET estatus = 0 WHERE Usuario = @username');
                // UPDATE Users SET estatus = 0 WHERE Usuario = @username;

            console.log(`Estado del usuario ${usuario} actualizado correctamente. Bloqueo`);
        } else {
            console.error('Error: Objeto pool no devuelto');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
}

module.exports = { insertarAlertaLogin, credencialesFallidas, registroInicioDeSesion, cambioEstatus, verifiacionSms, setcodigosms };


/* 

SELECT smsUsuarios.*, Users.*
FROM smsUsuarios
INNER JOIN Users ON smsUsuarios.usuario = Users.usuario
WHERE smsUsuarios.codigosms = '123456';

UPDATE Users
SET estatus = 0
WHERE usuario IN (
    SELECT usuario
    FROM smsUsuarios
    WHERE codigosms = '123456'
);


*/