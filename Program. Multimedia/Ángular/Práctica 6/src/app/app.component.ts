import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChuckService } from './service/chuck.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public categoria: any;
    public chiste: any;
    public formHTML: FormGroup;
    public orders: [];

    constructor(private servicio: ChuckService, private formBuilder: FormBuilder) {
        this.formHTML = this.formBuilder.group({
            orders: [null, [ Validators.required ] ]
        });
    }

    ngOnInit(): void {
        this.servicio.getCategoria()
        .then(response => {
            this.categoria = response;
            console.log(this.categoria);
        });
    }

    pulsoCategoria(evento){
        console.log(evento.target.value);
        this.servicio.bromaCategoria(evento.target.value)
        .then(response => {
            this.chiste = response;
            console.log(this.chiste);
        });
    }
}