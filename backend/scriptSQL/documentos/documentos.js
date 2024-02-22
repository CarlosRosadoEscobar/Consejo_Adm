const { getConnection } = require('../../database/conexionSqlServer');

const insertarDocumento = async (base64Data, fecha) => {
    try {
        let pool = await getConnection();
        
        if (pool) {

            let result = await pool.request().query(`
            INSERT INTO direccion_general_documentos (documento, fecha)
            VALUES ('${base64Data}', '${fecha}')
        `);

        return result.rowsAffected > 0;

            
        } else {
            console.log("error");
            return [];            
        }
        
        
    } catch (error) {
        console.error(error);
        return[];
    }
}

const listarDocumentos = async () => {
    try {

        let pool = await getConnection();
        if (pool) {
            console.log('Consulta');

            let result = await pool.request().query("SELECT * FROM direccion_general_documentos");
           
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

module.exports = { insertarDocumento, listarDocumentos };