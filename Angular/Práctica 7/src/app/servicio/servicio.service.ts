import { Injectable } from '@angular/core';
import { Joke } from 'src/app/class/joke';

@Injectable({
    providedIn: 'root'
})

export class ServicioService {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
        ];
    }

    getJokes() {
        return this.jokes;
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
        console.log(joke);
        let posicionJoke = this.jokes.indexOf(joke);

        if (posicionJoke !== -1) {
            this.jokes.splice(posicionJoke,1);
        }
    }
}