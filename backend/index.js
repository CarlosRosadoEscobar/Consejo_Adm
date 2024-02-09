const express = require('express');
const { connect, sql } = require('./db_config.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});
app.get('/api/usuarios', async (req, res) => {
    try {
        const pool = await sql.connect();
        const result = await pool.request().query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al obtener usuarios', error);
        res.status(500).json({ error: 'Error interno del servidor', details: error.message });
    } finally {
        pool.close(); // Cerrar la conexión en el bloque finally
    }
});

// Agrega más rutas y operaciones CRUD según tus necesidades

app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en http://localhost:${PORT}`);
    connect(); // Conectar a la base de datos al iniciar el servidor
});
