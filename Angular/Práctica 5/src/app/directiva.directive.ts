import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appDirectiva]'
})

export class DirectivaDirective implements OnInit {
    constructor(private el: ElementRef) {}

    foto0 = "assets/00.png";
    foto1 = "assets/01.png";
    
    ngOnInit(): void {}
    
    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.border = '2px solid green';
        this.el.nativeElement.style.backgroundRepeat = "no-repeat";
        this.el.nativeElement.style.backgroundImage = "url('" + this.foto1 + "')";
    }
      
    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.border = '0px';
        this.el.nativeElement.style.backgroundRepeat = "no-repeat";
        this.el.nativeElement.style.backgroundImage = "url('" + this.foto0 + "')";
    }
}