import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html',
    styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

    constructor() {}

    public numero = 100;
    public arrayNumeros = [];

    ngOnInit(): void {
        let i = 0;
        
        while (i < this.numero) {
            this.arrayNumeros.push(i);
            i++;
        }
    }

    ocultamos = false;

    muestro() {
        if (this.ocultamos == false) {
            this.ocultamos = true;
        } else if (this.ocultamos == true) {
            this.ocultamos = false;
        }
    }
}
