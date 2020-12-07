import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from './../servicio/servicio.service'
import { Joke } from 'src/app/class/joke';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {
    constructor(private ServicioService: ServicioService) { }

    ngOnInit(): void {}

    @Input('joke') data: Joke;

    deleteItem() {
        this.ServicioService.deleteJoke(this.data);
    }
}