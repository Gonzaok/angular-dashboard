import { Pipe, PipeTransform } from '@angular/core';

/**
 * Angular pipe to truncate strings
 * 
 * @export
 * @class TruncatePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    let limit = args ? parseInt(args, 10) : 10;
    let trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
