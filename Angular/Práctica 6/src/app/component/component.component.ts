import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.css']
})

export class ComponentComponent implements OnInit {
    constructor() { }

    @Input() chiste: any;

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChange){
        if (this.chiste != undefined) {
            this.chiste = this.chiste.value;
        } else {
            this.chiste = "";
        }
    }
}