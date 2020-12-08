import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { EntradaBlog } from './../class/entrada-blog';
import { ServicioService } from './../servicio/servicio.service'

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
    entradas: EntradaBlog[];
    loginForm: FormGroup;
    fecha: Date;

    constructor(private ServicioService: ServicioService) {
        this.entradas = this.ServicioService.getEntradas();
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            formTitulo: new FormControl ('', Validators.required),
            formContenido: new FormControl ('', Validators.required)
        });
    }

    nuevaEntradaBlog(titulo: string, contenido: string) {
        this.fecha = new Date(), 'dd-MM-yyyy';
        this.ServicioService.nuevaEntrada(new EntradaBlog(titulo, contenido, this.fecha));
    }
}