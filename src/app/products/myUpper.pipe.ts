import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myUpperCase"
})
export class MyUpperPipe implements PipeTransform {
  transform(value: string, caseType) {
    if (caseType == "upper") {
      value = value.toUpperCase();
    } else {
      value = value.toLowerCase();
    }

    return value;
  }
}
