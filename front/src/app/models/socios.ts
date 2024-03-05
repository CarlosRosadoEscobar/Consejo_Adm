export class Socios{
    Id:number;
    Fecha:string
    Nombre:string;
    Apellido:string;
    Area:string;
    Puesto:string;
    Región:string;
    Correo:string;
    Telefono:string;
    Usuario:string;
    Contraseña:string;
    Pregunta:string;
    Respuesta:string;
    firma_const:string;
    firma_mail:string;
    role:string;
    estatus:string;
    profile:string;
    prv:string;
    id_colaborador:string;
    id_candidato:string;
    estado:string;
    mfa:string;
    sesiones:string;
    fecha_baja:string;
    

    constructor(Id:number,Fecha:string,Nombre:string,Apellido:string,Area:string,Puesto:string,Región:string,Correo:string,Telefono:string,Usuario:string,Contraseña:string,Pregunta:string,Respuesta:string,firma_const:string,firma_mail:string,role:string,estatus:string,profile:string,prv:string,id_colaborador:string,id_candidato:string,estado:string,mfa:string,sesiones:string,fecha_baja:string){
        this.Id = Id
        this.Fecha = Fecha
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Area = Area
        this.Puesto = Puesto
        this.Región = Región
        this.Correo = Correo
        this.Telefono = Telefono
        this.Usuario = Usuario
        this.Contraseña = Contraseña
        this.Pregunta = Pregunta
        this.Respuesta = Respuesta
        this.firma_const = firma_const
        this.firma_mail = firma_mail
        this.role = role
        this.estatus = estatus
        this.profile = profile
        this.prv = prv
        this.id_colaborador = id_colaborador
        this.id_candidato = id_candidato
        this.estado = estado
        this.mfa = mfa
        this.sesiones = sesiones
        this.fecha_baja = fecha_baja
    }


}