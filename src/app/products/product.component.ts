import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  selector: "app-prod",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit{
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProducts()
    .subscribe((data) => this.product = data);
  }
  title: string = "Product app";
  desc: string = "Products List";
  imageWidth: number = 80;
  showTable: boolean = true;
  showImage: boolean = true;
  userInput: string = "";
  product: IProduct[] ;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  dataReceived(data: string): void {
    this.title = `${data}`;
  }
}
