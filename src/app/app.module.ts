import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { from } from "rxjs";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MyUpperPipe } from "./products/myUpper.pipe";
import { DiscountPipe } from "./products/discount.pipe";
import { MySearchPipe } from "./products/search.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { ProductComponent } from "./products/product.component";
import { HomepipePipe } from "./home/homepipe.pipe";
import { OrdersComponent } from "./orders/orders.component";
import { OrderserviceService } from "./orders/orderservice.service";
import { ProductDetailsComponent } from './products/productDetails.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "orders", component: OrdersComponent },
      { path: "products", component: ProductComponent },
      {path: 'product/:id', component: ProductDetailsComponent},
      { path: "", redirectTo: "home", pathMatch: "full" }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    MySearchPipe,
    StarComponent,
    HomepipePipe,
    OrdersComponent,
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService, OrderserviceService]
})
export class AppModule {}
