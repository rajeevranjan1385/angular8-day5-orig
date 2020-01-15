import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";
import { MyUpperPipe } from "./myUpper.pipe";
import { DiscountPipe } from "./discount.pipe";
import { MySearchPipe } from "./search.pipe";
import { ProductDetailsComponent } from "./productDetails.component";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [SharedModule, AppRoutingModule],
  declarations: [
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    MySearchPipe,
    ProductDetailsComponent
  ],
  providers: [ProductService]
})
export class ProductModule {}
