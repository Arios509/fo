import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 1) {
      return '<span class="label label-success">Active</span>'
    }
    else
      return '<span class="label label-success">Deactivated</span>'
  }

}
