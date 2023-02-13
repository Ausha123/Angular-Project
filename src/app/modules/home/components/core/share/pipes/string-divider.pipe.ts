import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringDivider'
})
export class StringDividerPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/ /g, '');
  }

}
