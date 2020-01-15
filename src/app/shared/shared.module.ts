import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChangeColorDirective } from "./colorDirective.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [StarComponent, ChangeColorDirective],
  exports: [CommonModule, FormsModule, StarComponent, ChangeColorDirective]
})
export class SharedModule {}
