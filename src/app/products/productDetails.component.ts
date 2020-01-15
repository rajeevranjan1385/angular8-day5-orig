import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl:"./productDetails.component.html"
})

export class ProductDetailsComponent implements OnInit{
    id: number;
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
    }
}