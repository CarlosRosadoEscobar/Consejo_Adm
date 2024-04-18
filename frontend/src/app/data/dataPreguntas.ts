export interface Pregunta {
    id: number;
    pregunta: string;
}

export class PreguntasService{
    static preguntas: Pregunta[] = [
        {id:1,pregunta:'¿Cuál es nombre de su mejor amiga/o?'},
        {id:2,pregunta:'¿Cuál es la ciudad de nacimiento de su madre?'},
        {id:3,pregunta:'¿Cuál es el nombre de su primer mascota?'}
    ]
}

