const {getConnection} = require('../../database/conexionSqlServer');

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

module.exports = { insertarDocumento }


