import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    value = "";

    pulsarBoton(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        this.value = idAttr.nodeValue;
    }
}
