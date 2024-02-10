
const express = require('express')
const app = express()

//* POST
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))  //para formularios


//mideware para auntetificar los usuarios
app.use((req,res,next) => {
    console.log("paso por el primer mideware");
    console.log(`Route: ${req.url} Metodo: ${req.method}`);
    next()
})

app.use((req,res,next) => {
    console.log("paso por el segundo mideware");
    console.log(`Route: ${req.url} Metodo: ${req.method}`);
    next()
})

app.get('/', (req,res) => {
    res.end('7u7')
})

app.get('/itsAlive', (req,res) => {
    res.sendStatus(204)
})


//Midaware de Authentificacion de usuarios
app.use((req,res,next) => {
    console.log("mideware de autentificacion");
    console.log(`Route: ${req.url} Metodo: ${req.method}`);

    if(req.query.login === 'Angel'){
        next()
    } else {
        req.send("usuario sin acceso")
    }

})

app.get('/dashboard',(req,res) => {
    res.send("Dashboar Page")
})


app.get('/prueba/:x/:y', (req,res) => {
    console.log(req.params.x);
    console.log(req.params.y);
    const resul = req.params.x + req.params.y;
    console.log('Resultado:', resul);
})

app.get('/usuarios/:nombre', (req,res) => {
    console.log(req.params.nombre);
    if(req.params.nombre === "angel") {
        res.send("usuario con Acceso")
    }
    res.send("El usuario se puede realizar")
    // res.json({"nombre": "angel"})

})

app.post('/usuarios', (req,res) => {
    console.log(req.body);
    res.end('creando usuarios')
})

app.put('/usuarios', (req,res) => {
    res.end('Actualizando usuarios')
})

app.delete('/usuarios', (req,res) => {
    res.end('eliminando usuarios')
})

app.patch('/usuarios', (req,res) => {
    res.end('Actualizando unos usuarios')
})


app.use((req,res)=>{
    res.status(404).send('No se encontro la url Solicitada')
})

app.listen(3000)
console.log(`Servidor en ejecución: http://localhost:${3000}`);






/* 
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


    app.listen(PORT, () => {
        console.log(`Servidor Express en ejecución en http://localhost:${PORT}`);
        connect(); // Conectar a la base de datos al iniciar el servidor
    }); 
*/
