import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";
@Pipe( {
  name: 'sortingString'
} )
export class SortingStringPipe implements PipeTransform {
  transform( array: Array<any>): Array<any> {
    return _.sortBy(array, 'point');
  }
}
