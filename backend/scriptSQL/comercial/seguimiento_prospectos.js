const { getConnection, mssql } = require('../../database/conexionSqlServer');

const getProspectos = async () => {
    try {
        const pool = await getConnection();
        
        if(pool){
            console.log('Seguimiento devuelto correctamente');
            const result = await pool.request().query("select * from record_prospect");
            return result.recordset; 
        }else{
            console.error('Error: Objeto pool no devuelto');
            return []; 
        }
        
    } catch (error) {
        console.log(error);
        return[];
    }
}

module.exports = {getProspectos};

