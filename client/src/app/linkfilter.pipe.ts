import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkfilter'
})
export class LinkfilterPipe implements PipeTransform {

  transform(links: any, keyword: any): any {
    if (keyword === undefined || keyword === '') {
      return links;
    }else {
      return links.filter(link =>
        link.tags.join('').toLowerCase().includes(keyword.toLowerCase()) ||
        link.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
}

}
