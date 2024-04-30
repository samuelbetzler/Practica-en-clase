// Definición del objeto SeparacionCancha
class SeparacionCancha {
    constructor(public id: number, public idCancha: number, public idDeportista: number, public fecha: Date, public horaDesde: string, public horaHasta: string) {}
}

// Interfaz para el objeto SeparacionCancha
interface ISeparacionCancha {
    id: number;
    idCancha: number;
    idDeportista: number;
    fecha: Date;
    horaDesde: string;
    horaHasta: string;
}
export { SeparacionCancha, ISeparacionCancha };