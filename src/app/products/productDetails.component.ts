import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';
import { IProduct } from './product.model';

@Component({
    templateUrl:"./productDetails.component.html"
})

export class ProductDetailsComponent implements OnInit{
    id: number;
    // name: string;
    // image: string;
    // description: string;
    details: IProduct[]

    constructor(private route: ActivatedRoute, 
        private productService: ProductService,
        private router: Router){}
    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
        // this.route.queryParams
        //     .subscribe((data)=>{
        //         this.name = data['name'];
        //         this.image = data['img'];
        //         this.description =  data['details']
        //     })

        this.productService.getProductDetails(this.id)
        .subscribe((data) => this.details = data);
    }

    OnBack(): void{
        this.router.navigate(['/product']);
    }
}