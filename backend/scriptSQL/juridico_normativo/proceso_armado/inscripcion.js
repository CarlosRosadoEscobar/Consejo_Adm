const {getConnection} = require('../../../database/conexionSqlServer');

const getUsuariosInscripcion = async () => {
    try {
        let pool = await getConnection();
        
        if (pool) {

            console.log("Consultas devueltas");

            let result = await pool.request().query("select * from jur_colaboradores_consulta where proceso = 'Inscripción'");

            return result.recordset;



        }else{
            console.error("Objeto pool no devuelto");
            return[];
        }

        
    } catch (error) {
        console.log(error);
        return[];
    }
}

module.exports = {getUsuariosInscripcion};
