import { Injectable } from '@angular/core';
import { EntradaBlog } from './../class/entrada-blog';

@Injectable({
    providedIn: 'root'
})

export class ServicioService {
    entradas: EntradaBlog[];
    fecha: Date;

    constructor() {
        this.fecha = new Date(), 'dd-MM-yyyy';
        this.entradas = [
            new EntradaBlog("Entrada 1", "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.", this.fecha),
            new EntradaBlog("Entrada 2", "Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.", this.fecha),
            new EntradaBlog("Entrada 3", "El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino", this.fecha),
        ]
    }

    nuevaEntrada(entradaNueva) {
        this.entradas.unshift(entradaNueva);
    }

    getEntradas() {
        return this.entradas;
    }

    borrarEntrada(entradaPasada) {
        let posicionEntrada = this.entradas.indexOf(entradaPasada);

        if (posicionEntrada !== -1) {
            this.entradas.splice(posicionEntrada,1);
        }
    }
}