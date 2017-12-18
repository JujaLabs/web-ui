import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import {AllUsers} from '../model/gamification/allUsers';

@Pipe( {
  name: 'sorting'
} )

export class SortingPipe implements PipeTransform {
  transform(array: AllUsers[], key?: string, counter?: number): AllUsers[] {
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
