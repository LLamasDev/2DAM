import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from 'src/app/class/joke';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    @Input('joke') data: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>()

    deleteItem() {
        this.jokeDeleted.emit(this.data);
    }
}