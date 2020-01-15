import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HomepipePipe } from "./home/homepipe.pipe";
import { OrdersComponent } from "./orders/orders.component";
import { OrderserviceService } from "./orders/orderservice.service";
import { ProductModule } from "./products/product.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, HttpClientModule, ProductModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, HomepipePipe, OrdersComponent],
  bootstrap: [AppComponent],
  providers: [OrderserviceService]
})
export class AppModule {}
