//* DATA BD
const { getUsuarios } = require('./scriptSQL/Users/Users'); 
const { crecimiento_servicios } = require('./scriptSQL/comercial/crecimiento_servicios'); 
const { getProspectos } = require('./scriptSQL/comercial/seguimiento_prospectos'); 

//* SERVER
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//* Middleware para permitir solicitudes
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // 204
};

//* MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsOptions));

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


// COMERCIAL
app.get('/cmr', async (req,res)=>{
    try {
        const crecimiento_servicio = await crecimiento_servicios();
        res.json(crecimiento_servicio)        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Hubo un error'});
    }
});

app.get('/prospectos', async (req,res) => {
    try {
        const prospectos = await getProspectos();
        res.json(prospectos)         
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"No se pudo traer la información de prospectos"});
    }
});




//* Creando Usuarios

app.post('/usuario', async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const usuarios = await getUsuarios(); 
    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.decrypted_contraseña === password); 

    if (usuarioValido) {
      const datosUsuario = {
        id_colaborador: usuarioValido.id_colaborador,
        Nombre: usuarioValido.Nombre,
        Apellido: usuarioValido.Apellido,
        Area: usuarioValido.Area,
        Puesto: usuarioValido.Puesto,
        estatus: usuarioValido.estatus,
        prv: usuarioValido.prv,
        estado: usuarioValido.estado,
        role: usuarioValido.role
      };
      res.status(200).json({ mensaje: 'Autenticación exitosa', usuario: datosUsuario });
    } else {
      res.status(401).send({ mensaje: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al autenticar al usuario' });
  }
});


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
// const path = require('path');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const docusign = require('docusign-esign');
// const fs = require("fs");

// const session = require('express-session');

// dotenv.config();

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(session({
//     secret:"50289sdf88a56as56", 
//     resave:true,
//     saveUninitialized:true,
// }))

// app.post('/form', async(req,res)=>{

//     await checarToken(req);
//     let envelopesApi = getSobresApi(req);
//     let envelope = makeEnvelope(req.body.nombre, req.body.email);

//     let results = await envelopesApi.createEnvelope(
//         process.env.ACCOUNT_ID, {envelopeDefinition: envelope});
//     console.log("envelope results ", results);


//     // console.log('Información recibida', req.body);
//     res.send('Información recibida');
// });

// function getSobresApi(req){
//     let dsApiClient = new docusign.ApiClient();
//     dsApiClient.setBasePath(process.env.BASE_PATH);
//     dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + req.session.access_token);
//     return new docusign.EnvelopesApi(dsApiClient);
// }

// function makeEnvelope(nombre,email){
//     let env = new docusign.EnvelopeDefinition();
//     env.templateId = process.env.TEMPLATE_ID;


//     let signer1 = docusign.TemplateRole.constructFromObject(
//         {
//             name: nombre,
//             email: email,
//             roleName: 'Prueba'
//         }
//     );

   

//     env.templateRoles = [signer1];
//     env.status = "sent"; // We want the envelope to be sent

//     return env;
// }



// async function checarToken(req){
//     if(req.session.access_token && Date.now() < req.session.expires_at){
//         console.log('reutiliza el token de acceso', req.session.access_token);
//     }else{
//         console.log('Generando un nuevo token');
//         let dsApiClient = new docusign.ApiClient();
//         dsApiClient.setBasePath(process.env.BASE_PATH);
        
//         const results = await dsApiClient.requestJWTUserToken(
//             process.env.INTEGRATION_KEY, 
//             process.env.USER_ID, 
//             "signature",
//             fs.readFileSync(path.join(__dirname,"private.key")),
//             3600
//         );
//         console.log(results.body);
//         req.session.access_token = results.body.access_token;
//         req.session.expires_at = Date.now() + (results.body.expires_in - 60) * 1000;
//     }
// }


// app.get('/', async (req,res)=>{
//     await checarToken(req);
//     res.sendFile(path.join(__dirname,'./static/form.html'));
// });

//https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=7dc7690c-b043-416b-aa63-77ac01d94818&redirect_uri=http://localhost:3000/

// app.listen(3000, () => {
//     console.log('El servidor ha sido iniciado en http://localhost:3000/', process.env.USER_ID);
// })


app.listen(3000, () => {
    console.log('El servidor ha sido iniciado en http://localhost:3000/');
})
