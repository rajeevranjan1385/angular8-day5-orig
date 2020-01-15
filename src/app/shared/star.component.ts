import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 

    ngOnChanges(){
        this.starWidth = this.rating * 86 / 6;
    }

    onStarClicked(): void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}