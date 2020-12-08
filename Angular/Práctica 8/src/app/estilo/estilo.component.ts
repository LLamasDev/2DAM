import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-estilo',
    templateUrl: './estilo.component.html',
    styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {
    constructor() { }
    
    ngOnInit(): void { }

    tituloEstilo = true;
    @Output() propagar = new EventEmitter<string>();

    cambiar() {
        this.tituloEstilo = !this.tituloEstilo;
        this.propagar.emit(this.tituloEstilo.toString());
    }
}