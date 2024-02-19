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


// DOCUSING
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const docusign = require('docusign-esign');
const fs = require("fs");

const session = require('express-session');

dotenv.config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:"50289sdf88a56as56", 
    resave:true,
    saveUninitialized:true,
}))

app.post('/form', async(req,res)=>{

    await checarToken(req);
    let envelopesApi = getSobresApi(req);
    let envelope = makeEnvelope(req.body.nombre, req.body.email);

    let results = await envelopesApi.createEnvelope(
        process.env.ACCOUNT_ID, {envelopeDefinition: envelope});
    console.log("envelope results ", results);


    // console.log('Información recibida', req.body);
    res.send('Información recibida');
});

function getSobresApi(req){
    let dsApiClient = new docusign.ApiClient();
    dsApiClient.setBasePath(process.env.BASE_PATH);
    dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + req.session.access_token);
    return new docusign.EnvelopesApi(dsApiClient);
}

function makeEnvelope(nombre,email){
    let env = new docusign.EnvelopeDefinition();
    env.templateId = process.env.TEMPLATE_ID;


    let signer1 = docusign.TemplateRole.constructFromObject(
        {
            name: nombre,
            email: email,
            roleName: 'Prueba'
        }
    );

   

    env.templateRoles = [signer1];
    env.status = "sent"; // We want the envelope to be sent

    return env;
}



async function checarToken(req){
    if(req.session.access_token && Date.now() < req.session.expires_at){
        console.log('reutiliza el token de acceso', req.session.access_token);
    }else{
        console.log('Generando un nuevo token');
        let dsApiClient = new docusign.ApiClient();
        dsApiClient.setBasePath(process.env.BASE_PATH);
        
        const results = await dsApiClient.requestJWTUserToken(
            process.env.INTEGRATION_KEY, 
            process.env.USER_ID, 
            "signature",
            fs.readFileSync(path.join(__dirname,"private.key")),
            3600
        );
        console.log(results.body);
        req.session.access_token = results.body.access_token;
        req.session.expires_at = Date.now() + (results.body.expires_in - 60) * 1000;
    }
}


app.get('/', async (req,res)=>{
    await checarToken(req);
    res.sendFile(path.join(__dirname,'./static/form.html'));
});

//https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=7dc7690c-b043-416b-aa63-77ac01d94818&redirect_uri=http://localhost:3000/

app.listen(3000, () => {
    console.log('El servidor ha sido iniciado en http://localhost:3000/', process.env.USER_ID);
})























//! #####################################################################################################


// //* POST
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))  //para formularios

// //mideware para auntetificar los usuarios
// app.use((req,res,next) => {
//     console.log("paso por el primer mideware");
//     console.log(`Route: ${req.url} Metodo: ${req.method}`);
//     next()
// })

// app.use((req,res,next) => {
//     console.log("paso por el segundo mideware");
//     console.log(`Route: ${req.url} Metodo: ${req.method}`);
//     next()
// })

// app.get('/', (req,res) => {
//     res.end('7u7')
// })

// app.get('/itsAlive', (req,res) => {
//     res.sendStatus(204)
// })

// //Midaware de Authentificacion de usuarios
// app.use((req,res,next) => {
//     console.log("mideware de autentificacion");
//     console.log(`Route: ${req.url} Metodo: ${req.method}`);

//     if(req.query.login === 'Angel'){
//         next()
//     } else {
//         req.send("usuario sin acceso")
//     }

// })

// app.get('/dashboard',(req,res) => {
//     res.send("Dashboar Page")
// })

// app.get('/prueba/:x/:y', (req,res) => {
//     console.log(req.params.x);
//     console.log(req.params.y);
//     const resul = req.params.x + req.params.y;
//     console.log('Resultado:', resul);
// })

// app.get('/usuarios/:nombre', (req,res) => {
//     console.log(req.params.nombre);
//     if(req.params.nombre === "angel") {
//         res.send("usuario con Acceso")
//     }
//     res.send("El usuario se puede realizar")
//     // res.json({"nombre": "angel"})

// })

// app.post('/usuarios', (req,res) => {
//     console.log(req.body);
//     res.end('creando usuarios')
// })

// app.put('/usuarios', (req,res) => {
//     res.end('Actualizando usuarios')
// })

// app.delete('/usuarios', (req,res) => {
//     res.end('eliminando usuarios')
// })

// app.patch('/usuarios', (req,res) => {
//     res.end('Actualizando unos usuarios')
// })

// app.use((req,res)=>{
//     res.status(404).send('No se encontro la url Solicitada')
// })


//! ########################################################################################################






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

