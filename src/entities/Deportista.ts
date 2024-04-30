//Definimos la clase Deportista con sus atributos id, nombre, identificacion y Equipo_que_representa
class Deportista {
    constructor(public id:number, public nombre:string, public identificacion:string, public Equipo_que_representa: string){}
}
//Interfaz para el objeto Deportista
interface IDeportista {
    id: number;
    nombre: string;
    identificacion: string;
    Equipo_que_representa: string;
}
export { Deportista, IDeportista };