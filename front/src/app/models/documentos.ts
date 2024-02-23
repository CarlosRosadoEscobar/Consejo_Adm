export class Documentos {
    id:number;
    documento:string;
    fecha:string;
    constructor(id:number,documento:string,fecha:string){
        this.id=id;
        this.documento=documento;
        this.fecha=fecha;
    }
}