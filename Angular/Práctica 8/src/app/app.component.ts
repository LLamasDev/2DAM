import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'practica8';
    backcolor: string;

    cambiarFondo(evento) {
        if(evento == "true") {
            this.backcolor = "white";
        } else {
            this.backcolor = "DarkGray";
        }
    }
}