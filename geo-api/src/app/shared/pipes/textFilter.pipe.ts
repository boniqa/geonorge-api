import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textFilter' })
export class TextFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      debugger
      return it.description.toLocaleLowerCase().includes(searchText);
    });
  }
}