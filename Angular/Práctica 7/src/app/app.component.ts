import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Joke } from 'src/app/class/joke';
import { ServicioService } from './servicio/servicio.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    jokes: Joke[];

    constructor(private titleService: Title, private ServicioService: ServicioService) {
        this.jokes = this.ServicioService.getJokes();
    }

    ngOnInit(): void {
        this.titleService.setTitle("Practica");
    }
}