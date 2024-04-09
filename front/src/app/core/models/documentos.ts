export class Documentos {
    id:number;
    documento:string;
    fecha:string;
    usuario:string
    socios_firmas:string
    constructor(id:number,documento:string,fecha:string,usuario:string,socios_firmas:string){
        this.id=id;
        this.documento=documento;
        this.fecha=fecha;
        this.usuario=usuario;
        this.socios_firmas=socios_firmas;
    }
}