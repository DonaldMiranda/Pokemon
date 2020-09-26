import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroName'
})
export class FiltroNamePipe implements PipeTransform {
  transform(value: any, args: any): any {
    var isVisible = false;
    const result = [];
    for (const pokemon of value) {
      if (pokemon.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        result.push(pokemon);
      }
    }
    if (result.length == 0) {
      return value;
    } else {
      return result;
    }


  }
}
