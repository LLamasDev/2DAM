import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html',
    styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    colorFondo = "";
    esRojo = false;
    esVerde = false;

    pulsarBoton(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.colorFondo = idAttr.nodeValue;

        if (this.colorFondo == "rojo") {
            this.esRojo = true;
            this.esVerde = false;
        } else if (this.colorFondo == "verde") {
            this.esVerde = true;
            this.esRojo = false;
        }
    }
}
