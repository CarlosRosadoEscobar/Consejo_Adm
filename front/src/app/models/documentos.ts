export class Documentos {
    id:number;
    documento:string;
    fecha:string;
    usuario:string
    constructor(id:number,documento:string,fecha:string,usuario:string){
        this.id=id;
        this.documento=documento;
        this.fecha=fecha;
        this.usuario=usuario;
    }
}