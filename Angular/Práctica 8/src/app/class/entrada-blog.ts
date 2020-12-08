export class EntradaBlog {
    public titulo: string;
    public contenido: string;
    public fecha: Date;
    constructor(titulo: string, contenido: string, fecha: Date) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = fecha;
    }
}