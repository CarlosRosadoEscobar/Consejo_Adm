//* DATA BD
const { getUsuarios } = require('./scriptSQL/Users/Users');
const { crecimiento_servicios } = require('./scriptSQL/comercial/crecimiento_servicios');
const { getProspectos } = require('./scriptSQL/comercial/seguimiento_prospectos');
const { getVacantes } = require('./scriptSQL/rrhh/vacante');
const {getUsuariosRegion} = require('./scriptSQL/rrhh/region');
const {getUsuariosConsulta} = require('./scriptSQL/juridico_normativo/proceso_armado/consulta');
const {getUsuariosInscripcion} = require('./scriptSQL/juridico_normativo/proceso_armado/inscripcion');
const { getUsuariosCredencializacion } = require('./scriptSQL/juridico_normativo/proceso_armado/credencializacion');

//* SERVER
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { json } = require('body-parser');
const app = express();

//* Middleware para permitir solicitudes
const corsOptions = {
  origin: 'http://localhost:4200',
  // origin: 'http://10.10.10.146:4200/',
  optionsSuccessStatus: 200, // 204,
  origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests

};

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  req.clientIp = ip;
  next();
});

//* MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsOptions));
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}, extended=true)); 

//* ASSET
app.get('/SiguesVivo', (req,res) => {
  res.sendStatus(204)
})

//! ##################################################################
//! ######################### USUARIOS ###############################
//! ##################################################################
//*  Usuarios
app.get('/usuario', async (req, res) => {
  try {
    const userData = await getUsuarios(); 
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al obtener los usuarios' });
  }    
});

//* validacion usuarios
app.post('/usuario', 
  async (req, res) => {
    try {
      const { usuario, password } = req.body;

      // Realizar la autenticación del usuario
      const usuarios = await getUsuarios(); 
      const usuarioValido = usuarios.find(u => u.usuario === usuario && u.decrypted_contraseña === password);
      
      if (usuarioValido) {
        // Si la autenticación es exitosa, devolver datos de usuario
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
        return res.status(200).json({ mensaje: 'Autenticación exitosa', usuario: datosUsuario });
      } else {
        // Si las credenciales son incorrectas, devolver un mensaje de error con código 401 (No autorizado)
        return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos', codigo: 401 });
      }
    } catch (error) {
      // Si ocurre un error durante el proceso de autenticación o en el servidor, devolver un mensaje de error genérico con código 500 (Error del servidor)
      console.error(error);
      return res.status(500).json({ mensaje: 'Error al procesar la solicitud', codigo: 500 });
    }
  }
);

//! ##################################################################
//! ######################### Comercial ##############################
//! ##################################################################
//* COMERCIAL
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
//! ##################################################################
//! ########################## RRHH ##################################
//! ##################################################################

//* RECURSOS HUMANOS
app.get('/rrhh/vacantes', async (req,res) => {
  try {
    const vacantes = await getVacantes();
    res.json(vacantes);        
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"No se pudo traer la información de las vacantes"});
  }
});

//* app.get('/rrhh/rotacion');
app.get('/rrhh/region', async (req,res) => {
  try {
    const regiones = await getUsuariosRegion();
    res.json(regiones);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "No se pudo traer la información de los usuarios por region."});
  }
});

//! ##################################################################
//! ####################### jUR_NORMATIVO ############################
//! ##################################################################

//* Jurídico Normativo
app.get('/juridico_normativo/consulta', async (req,res) => {
  try {
    const consulta = await getUsuariosConsulta();
    res.json(consulta);        
  } catch (error) {
    console.log(error);
    res.status(500),json({ error : "No se pudo traer la información"})
  }
});
app.get('/juridico_normativo/inscripcion', async (req,res) => {
  try {
    const inscripcion = await getUsuariosInscripcion();
    res.json(inscripcion);        
  } catch (error) {
    console.log(error);
    res.status(500),json({ error : "No se pudo traer la información"})
  }
});
app.get('/juridico_normativo/credencializacion', async (req,res) => {
  try {
    const credencializacion = await getUsuariosCredencializacion();
    res.json(credencializacion);        
  } catch (error) {
    console.log(error);
    res.status(500),json({ error : "No se pudo traer la información"})
  }
});


//! ##################################################################
//! ####################### REGISTRO LOGIN ###########################
//! ##################################################################
app.post('/registro', async (req, res) => {
  try {
    const historialInicioSesion = req.body;
    console.log('Historial de inicio de sesión recibido:', historialInicioSesion);
    res.status(200).send({ mensaje: 'Datos de historial de inicio de sesión recibidos correctamente' });
  } catch (error) {
    console.error('Error al procesar los datos del historial de inicio de sesión:', error);
    res.status(500).send({ error: 'Hubo un error al procesar los datos del historial de inicio de sesión' });
  }
});

//   PDF
const fileUpload = require('express-fileupload')
const { insertarDocumento, listarDocumentos, obtenerDocumento } = require('./scriptSQL/documentos/documentos')
app.use(fileUpload())
app.get('/documentos', async (req,res) => {
  try {
    const documentos = await listarDocumentos();
    res.json(documentos);        
  } catch (error) {
    console.log(error);
    res.status(500),json({ error : "No se pudo traer la información"})
  }
});
app.post('/documentos', async (req, res) => {
  try {
    let base64Data = req.body.documento;
    const fecha = new Date().toISOString().slice(0, 19).replace("T", " ");
    const insertResult = await insertarDocumento(base64Data, fecha);
    if (insertResult) {
      return res.json(insertResult);
    } else {
      return res.status(500).send({ message: 'Error no se puede guardar en la BD' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({error : 'Hubo un error'});
  }
});
app.get('/documentos/:id', async (req,res) => {  
  try {
    let id = req.params.id;
    
    let documento = await obtenerDocumento(id)
    return res.json(documento);
        
  } catch (error) {
    console.log(error);
    res.status(500).send({error: 'Hubo un error'});
  }
});

//! ##################################################################
//! ######################### DOCUSING ###############################
//! ##################################################################
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
    console.log('El servidor ha sido iniciado en http://localhost:3000');
})
