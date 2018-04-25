import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the TruncatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, limit: number =40, trail: String = '...'): string {

  let result = value || '';
  if (value) {
    const words = value.split(/\s+/);
    if (words.length > Math.abs(limit)) {
      if (limit < 0) {
        limit *= -1;
        result = trail + words.slice(words.length - limit, words.length).join(' ');

      } else {
        result = words.slice(0, limit).join(' ') + trail;

      }

    }

  }

  return result;
 
  }
}
