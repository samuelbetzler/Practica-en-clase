//Definimos el objeto Cancha con sus atributos id y descripcion
class Cancha {
  constructor(public id:number, public descripcion: string) {}
}
//Interfaz para el objeto Cancha
interface ICancha {
  id: number;
  descripcion: string;
}

export { Cancha, ICancha };