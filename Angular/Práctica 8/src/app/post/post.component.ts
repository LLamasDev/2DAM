import { Component, Input, OnInit } from '@angular/core';
import { EntradaBlog } from './../class/entrada-blog';
import { ServicioService } from './../servicio/servicio.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
    constructor(private ServicioService: ServicioService) { }

    ngOnInit(): void { }

    entradas: EntradaBlog;

    @Input() post: EntradaBlog;

    borrar() {
        this.ServicioService.borrarEntrada(this.post);
    }
}