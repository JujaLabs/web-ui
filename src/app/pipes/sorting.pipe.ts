import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe( {
  name: 'sorting'
} )

export class SortingPipe implements PipeTransform {
  transform(array: Array<any>, key?: any, counter?: number): Array<any> {
    if (counter === 1) {
      return _.sortBy(array, key);
    } else if (counter === 2) {
      return _.sortBy(array, key).reverse();
    } else {
      key = '';
      return _.sortBy(array, key);
    }
  }
}
