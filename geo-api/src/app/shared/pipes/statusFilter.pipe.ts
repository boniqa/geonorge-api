import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusFilter' })
export class StatusFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} switchValue
   * @returns {any[]}
   */
  transform(items: any[], switchValue: string): any[] {
    if (!items) {
      return [];
    }
    if (!switchValue) {
      return items;
    }
    switchValue = switchValue.toLocaleLowerCase();

    switch (switchValue) {
        case 'all':
            return items; 
        case 'active':
            return items.filter(it =>{
                return it.status === 'Gyldig';
            })
        case 'retired':
            return items.filter(it => {
                return it.status === 'Utgått';
            })
        case 'submitted':
            return items.filter(it => {
                return it.dateSubmitted !== undefined;
            })
        default:
            break;
    }
  }
}