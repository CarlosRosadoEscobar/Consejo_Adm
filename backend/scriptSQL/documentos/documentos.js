const { getConnection } = require('../../database/conexionSqlServer');

const insertarDocumento = async (base64Data, fecha, usuario,socios) => {
  try {
    let pool = await getConnection();
    if (pool) {
      let result1 = await pool.request().query(`
        INSERT INTO direccion_general_documentos (documento, fecha, usuario,socios_firmas)
        OUTPUT INSERTED.id -- Retrieve the generated ID
        VALUES ('${base64Data}', '${fecha}', '${usuario}','${socios}')
      `);
      if (result1.rowsAffected > 0) {
        const generatedId = result1.recordset[0].id;
        let result2 = await pool.request().query(`
          INSERT INTO direccion_general_documentos_historial (id_documento, mensaje, fecha)
          VALUES ('${generatedId}', 'El documento fue subido por ${usuario}', '${fecha}')
        `);
        return result2.rowsAffected > 0;
      } else {
        return false;
      }
    } else {
      console.log("error");
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}


const listarDocumentos = async () => {
  try {
    let pool = await getConnection();
    if (pool) {
      console.log('Consulta');
      let result = await pool.request().query("SELECT * FROM direccion_general_documentos order by fecha desc ");
      return result.recordset;
    } else {
      console.log("Objeto pool no devuelto");
      return[];
    }
  } catch (error) {
    console.log(error);
    return[];
  }
}

const obtenerDocumento = async (id) => {
  try {
    let pool = await getConnection();
    if (pool) {
      console.log('consulta');
      const result = await pool.request()
      const consulta = `SELECT * FROM direccion_general_documentos WHERE id= ${id}`;
      const respuesta = await pool.request().query(consulta);
      return respuesta.recordset;
    }else{
      console.log('Objeto pool no devuelto');
      return[];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

/* const firmaDocumento = async (id, documento, usuario,fecha,socios_firmas) => {
  try {
    let pool = await getConnection();
    if (pool) {
      const updateQuery = `UPDATE direccion_general_documentos SET documento = @documento, usuario = @usuario, socios_firmas=@socios_firmas WHERE id = @id;`;
      const result = await pool.request().input('id', id).input('documento', documento).input('usuario', usuario).query(updateQuery);
      const historial = `INSERT INTO direccion_general_documentos_historial(id_documento,mensaje,fecha) values (${id},'Documento firmado por ${usuario}','${fecha}')`;
      const result2 = await pool.request().input('id', id).input('documento', documento).input('usuario', usuario).input('socios_firmas',socios_firmas).query(historial);
      return result.rowsAffected > 0;
      return result2.rowsAffected > 0;
    } else {
      console.log('Objeto pool no devuelto');
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}; */

const firmaDocumento = async (id, documento, usuario, fecha, socios_firmas) => {
  try {
    let pool = await getConnection();
    if (pool) {
      // Actualizar la tabla direccion_general_documentos
      const updateQuery = `UPDATE direccion_general_documentos SET documento = @documento, usuario = @usuario, socios_firmas=@socios_firmas WHERE id = @id;`;
      const resultUpdate = await pool.request().input('id', id).input('documento', documento).input('usuario', usuario).input('socios_firmas', socios_firmas).query(updateQuery);

      // Verificar si la actualización fue exitosa
      if (resultUpdate.rowsAffected > 0) {
        // Insertar en la tabla direccion_general_documentos_historial
        const historialQuery = `INSERT INTO direccion_general_documentos_historial(id_documento, mensaje, fecha) VALUES (@id, 'Documento firmado por ${usuario}', @fecha);`;
        const resultHistorial = await pool.request().input('id', id).input('fecha', fecha).query(historialQuery);

        // Verificar si la inserción en el historial fue exitosa
        return resultHistorial.rowsAffected > 0;
      } else {
        console.log('No se pudo actualizar el registro en direccion_general_documentos.');
        return false;
      }
    } else {
      console.log('Objeto pool no devuelto');
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};



const UsuariosListar = async () => {
  try {
    let pool = await getConnection();
    if (pool) {
      let result = await pool.request().query(`select Nombre,id_colaborador from Users`);
      return result.recordset;
    } else {
      console.error(error);
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = { insertarDocumento, listarDocumentos, obtenerDocumento, firmaDocumento, UsuariosListar };