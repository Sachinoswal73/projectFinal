import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  pure : false
})

export class ColorPipe implements PipeTransform {

  transform(value: any, name : any) {
    
    if(name === ''){
        return value;
    }
    
    return value.filter( ( vm : any ) => {
    
          let allColors : any = [];

          vm.pclr.forEach( ( vmpc : any ) => {
                allColors.push(vmpc.clr.toLowerCase());
          } )

          return allColors.includes(name?.toLowerCase().trim());


    } );
  }


}
