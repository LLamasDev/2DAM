import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ChuckService {
    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void { }

    getCategoria() {
        return this.httpClient.get('https://api.chucknorris.io/jokes/categories').toPromise();
    }

    bromaCategoria(catego) {
        const url = 'https://api.chucknorris.io/jokes/random?category=' + catego;
        return this.httpClient.get(url).toPromise();
    }
}