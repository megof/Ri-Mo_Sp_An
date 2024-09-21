import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seach',
  standalone: true
})
export class SeachPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
