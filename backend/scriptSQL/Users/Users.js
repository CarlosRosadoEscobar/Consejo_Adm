const { getConnection, mssql } = require('../../database/conexionSqlServer');

const getUsuarios = async () => {
    try {
        const pool = await getConnection();
        if (pool) {
            console.log('Data Usuarios devuelto correctamente');
            const result = await pool.request().query("SELECT id_colaborador, Nombre, Apellido, usuario, Area, Puesto, estatus, prv, estado, role, CONVERT(VARCHAR(MAX), DECRYPTBYPASSPHRASE('password', contraseña)) AS decrypted_contraseña FROM Users");
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



/* 

    ya esta, ahora quiero que cuando se exporten los datos de la bd se encripten con una contraseña

    const { getConnection, mssql } = require('../../database/conexionSqlServer');

    const getUsuarios = async () => {
        try {
            const pool = await getConnection();
            if (pool) {
                console.log('Data Usuarios devuelto correctamente');
                const result = await pool.request().query("SELECT id_colaborador, Nombre, Apellido, usuario, Area, Puesto, estatus, prv, estado, role, CONVERT(VARCHAR(MAX), DECRYPTBYPASSPHRASE('password', contraseña)) AS decrypted_contraseña FROM Users");
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


    y que ahora en esta parte:

    app.post('/usuario', async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const usuarios = await getUsuarios(); 
        const usuarioValido = usuarios.find(u => u.usuario === usuario && u.decrypted_contraseña === password); 

        if (usuarioValido) {
        res.status(200).send({ mensaje: 'Autenticación exitosa' });
        } else {
        res.status(401).send({ mensaje: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al autenticar al usuario' });
    }
    });


    se puedan desencriptar 


*/

