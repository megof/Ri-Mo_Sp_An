import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seach',
  standalone: true
})
export class SeachPipe implements PipeTransform {


  transform(items: any[], searchText: string, property: string, id: string, fil: string): any[] {
    items = items.sort((a, b) => a.name.localeCompare(b.name))
    /*if(fil == 'departmentId' && id!='undefined'){
      items = items.filter(item => {
        return item[fil] == id;
      })
    }*/
    if(!items || !searchText){
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item[property].toLowerCase().includes(searchText);
    })
  }
}
