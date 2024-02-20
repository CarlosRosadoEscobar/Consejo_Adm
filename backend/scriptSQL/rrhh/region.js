const { getConnection, mssql } = require('../../database/conexionSqlServer');

const getUsuariosRegion = async () => {
    try {
        const pool = await getConnection();
        
        if(pool){
            console.log('Usuarios por regiones devueltas correctamente');
            let result = await pool.request().query("SELECT * from Users");
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

module.exports = { getUsuariosRegion };