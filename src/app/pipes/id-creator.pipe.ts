import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCreator'
})
export class IdCreatorPipe implements PipeTransform {

  transform(id: string) {
    if (!id) return id;
    return id.toLowerCase().trim().split(' ').join ('-');
  }

}
