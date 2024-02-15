//* DATA BD
const { getUsuarios } = require('./scriptSQL/Users/Users'); 

//* SERVER
const express = require('express');
const morgan = require('morgan');
const app = express();

//* MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())

//* ASSET
app.get('/SiguesVivo', (req,res) => {
    res.sendStatus(204)
})

//! ##################################################################
//! ######################### USUARIOS ###############################
//! ##################################################################

app.get('/usuario', async (req, res) => {
    try {
        const userData = await getUsuarios(); 
        res.json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al obtener los usuarios' });
    }
});

//* Creando Usuarios
app.post('/usuario', (req,res) =>{
    // console.log(...req.body);
    console.log(req.body);
    res.send("Creando Usuarios")
})

//* Actualizando Usuarios
app.put('/usuario', (req,res) =>{
    res.send("Actualizando Usuarios")
})

//* Eliminando Usuarios
app.delete('/usuario', (req,res) =>{
    res.send("Eleminando Usuarios")
})

//* Obteniendo un Usuarios
app.get('/usuario/:id', (req,res) =>{
    res.send("Obteniendo un Usuarios por id")
})



//*RUN SERVER
app.listen(3000)
console.log(`Servidor en ejecución: http://localhost:${3000}`);
