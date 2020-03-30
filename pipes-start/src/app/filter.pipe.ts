import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    // the value represent the array
    if (value.length === 0 || filterString === '') {
      return value;
    }

    
    const resultArray = [];

    //Loop in the array and check each item
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
