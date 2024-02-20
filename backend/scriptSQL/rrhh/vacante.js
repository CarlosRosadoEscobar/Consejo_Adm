const { getConnection, mssql } = require('../../database/conexionSqlServer');

const getVacantes = async () => {
    try {
        const pool = await getConnection();
        
        if(pool){
            console.log('Vacantes devueltas correctamente');
            let result = await pool.request().query();            
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

module.exports = {getVacantes};