const { getConnection } = require('../../database/conexionSqlServer');

const insertarDocumento = async (base64Data, fecha, usuario) => {
  try {
    let pool = await getConnection();
    if (pool) {
      let result1 = await pool.request().query(`
        INSERT INTO direccion_general_documentos (documento, fecha, usuario)
        OUTPUT INSERTED.id -- Retrieve the generated ID
        VALUES ('${base64Data}', '${fecha}', '${usuario}')
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

const firmaDocumento = async (id, documento, usuario,fecha) => {
  try {
    let pool = await getConnection();
    if (pool) {
      const updateQuery = `UPDATE direccion_general_documentos SET documento = @documento, usuario = @usuario WHERE id = @id;`;
      const result = await pool.request().input('id', id).input('documento', documento).input('usuario', usuario).query(updateQuery);
      const historial = `INSERT INTO direccion_general_documentos_historial(id_documento,mensaje,fecha) values (${id},'Documento firmado por ${usuario}','${fecha}')`;
      const result2 = await pool.request().input('id', id).input('documento', documento).input('usuario', usuario).query(historial);
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
};
module.exports = { insertarDocumento, listarDocumentos, obtenerDocumento, firmaDocumento };