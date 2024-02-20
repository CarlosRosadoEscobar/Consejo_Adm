const { getConnection, mssql } = require('../../database/conexionSqlServer');

const crecimiento_servicios = async () =>{
    try {
        const pool = await getConnection();
        if(pool){
            console.log('Devuelto correctamente');
            const result = await pool.request().query("select * from cmr_oa WHERE estatus = 'Completo'");
            return result.recordset;
        }else{
            console.error('Error: Objeto pool no devuelto');
            return[];
        }        
    } catch (error) {
        console.log(error);
        return[];
    }
}

module.exports = {crecimiento_servicios};