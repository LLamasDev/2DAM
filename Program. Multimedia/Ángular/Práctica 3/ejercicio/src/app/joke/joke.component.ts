import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }

    @Input() value: string;

    ngOnChanges(changes: SimpleChange){
        document.getElementById("cambioFondo").style.backgroundColor = this.value;
    }
}