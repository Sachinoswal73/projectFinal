import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})

export class RangePipe implements PipeTransform {

  transform(value: any, name : any) {
    
    
    return value?.filter( ( vm : any ) => {
    
        return vm.pprice < name;
         
    } );

  }


}
