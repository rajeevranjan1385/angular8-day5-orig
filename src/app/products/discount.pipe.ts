import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "discount"
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountedAmount: number) {
    value = value - discountedAmount;
    return value;
  }
}
