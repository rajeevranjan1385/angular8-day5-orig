import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appColor]'
})

export class ChangeColorDirective{
    constructor(private element: ElementRef){
        element.nativeElement.style.color = 'hotpink';
    }
}