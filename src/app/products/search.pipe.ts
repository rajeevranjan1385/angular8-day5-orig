import { Pipe, PipeTransform } from "@angular/core";
import {IProduct} from './product.model';

@Pipe({
  name: "SearchPipe"
})
export class MySearchPipe implements PipeTransform {
  transform(value: IProduct[], userInput: string) {
    userInput = userInput ? userInput.toLowerCase() : null;
    return userInput ? value.filter(data =>
            (data.productName.toLowerCase()).indexOf(userInput) !== -1 ||
            (data.productCode.toLowerCase()).indexOf(userInput) !== -1
        ): value;
  }
}
