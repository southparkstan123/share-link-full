import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isShareLinkFilter'
})
export class IsShareLinkFilterPipe implements PipeTransform {

  transform(links: any, isShared: boolean): any {
    if (isShared === undefined) {
      return links;
    }else {
      return links.filter(link => link.isShared === isShared);
    }
  }

}
