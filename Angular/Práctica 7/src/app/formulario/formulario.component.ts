import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ServicioService } from './../servicio/servicio.service'
import { Joke } from 'src/app/class/joke';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private ServicioService: ServicioService) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            setup: new FormControl('', [Validators.required, Validators.minLength(6)]),
            punchline: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    createJoke(setup: string, punchline: string) {
        this.ServicioService.addJoke(new Joke(setup, punchline));
    }
}