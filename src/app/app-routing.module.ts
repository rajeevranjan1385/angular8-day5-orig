import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./products/product.component";
import { ProductDetailsComponent } from "./products/productDetails.component";
import { HomeComponent } from "./home/home.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductGuards } from "./products/product.guard.service";

const routes: Routes = [
  { path: "product", component: ProductComponent },
  {
    path: "product/:id",
    canActivate: [ProductGuards],
    component: ProductDetailsComponent
  },
  { path: "home", component: HomeComponent },
  { path: "orders", component: OrdersComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HomeComponent } //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ProductGuards],
  exports: [RouterModule]
})
export class AppRoutingModule {}
