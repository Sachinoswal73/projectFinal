import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform {

  transform(value: any, name : any) {
    if(name === ''){
        return value;
    }
    return value.filter( ( vm : any ) => {
    
          // return vm.salary > name;

          // return vm.firstName.startsWith(name) || vm.lastName.startsWith(name) || vm.dept.startsWith(name) || vm.salary > name ;

          // return vm.pname?.toLowerCase().includes(name.toLowerCase().trim());

          // return vm.clr.startsWith(name);

          // return vm.pclr[0]?.clr.toLowerCase().includes(name.toLowerCase().trim()) || vm.pclr[1]?.clr.toLowerCase().includes(name.toLowerCase().trim())  ;

          // red includes re || green includes re

          // let allColors : any = ['YelloGold','Whistiloa','Golden','Pink'];

          let allColors : any = [];

          vm.pclr.forEach( ( vmpc : any ) => {
                allColors.push(vmpc.clr.toLowerCase());
          } )

          // let allColors = ['YelloGold','RedGold','Pink'];

          return vm.pname?.toLowerCase().includes(name.toLowerCase().trim()) || vm.pcat?.toLowerCase().includes(name.toLowerCase().trim());

        //  if (['YelloGold','Whistiloa','Golden','Pink'].includes(name)){
        //     return vm;
        //  }

    } );
  }

}
