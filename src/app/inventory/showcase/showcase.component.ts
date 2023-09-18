import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/shared/inventory.service';
import { ProductsModel } from 'src/app/shared/products.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowcaseComponent implements OnInit {

  nameString = '';

  clrString = '';

  productsArray : any ;

  allColors : any = [];

  maxPrice !: number;

  currentPrice = 70000;

  qpDepm : any;

  gotObj : any;

  constructor( private invSer : InventoryService, private ar2 : ActivatedRoute ){

  }

  // use BehaviorSubject & observer - done
  // use of trackBy - done
  // use impure pipe for sorting - done
  // selectbox - filter category & colors - done
  // use onPush - tried
  // use async pipe to prevent memory leakage
  
  
  ngOnInit(): void {

    this.ar2.queryParams.subscribe( ( qps : any ) => {
          this.qpDepm = qps.dept;
    } )

    this.invSer.fetchProductsfromDb().subscribe( ( fpfd : any ) => {

          console.log(fpfd);
          this.productsArray = fpfd;
          this.productsArray.forEach( ( pas : any ) => {
            // console.log(pas);
            pas.pclr.forEach( ( clr : any) => {
              if ( !this.allColors.includes(clr.clr)){
                this.allColors.push(clr.clr);
              }   
            });
            // console.log(this.allColors);
          } )

          let tempNum = 0;
          this.productsArray.forEach( (pelm : any) => {
              if (pelm.pprice > tempNum) {
                this.maxPrice = pelm.pprice;
                tempNum = pelm.pprice;
              }
          } )
          // console.log(this.maxPrice);
    } )

    this.invSer.addProductEmitr.subscribe( ( apes : any ) => {
          console.log('addProdEmtrSubscribd');
          this.invSer.fetchProductsfromDb().subscribe( ( fpfd : any ) => {
            this.productsArray = fpfd;
      } )
    } )
    
  }

  editProduct(pid : any){
      console.log('to b edtd', pid);      
  }

  onDelete(pid :any){
    console.log('to b dltd', pid);

    this.gotObj = this.productsArray.find( ( paf:any ) => {
        return paf.pid == pid;
        // console.log(paf.pid, pid);
    } )

    // console.log(this.gotObj.iid);

    this.invSer.deleteProduct(this.gotObj.iid).subscribe( ( isd : any ) => {
          console.log(this.gotObj.iid);
    } )

  }

  clrSelected(alc : any){
      this.clrString = alc; 
      console.log(alc);
  }

  trackByFunc( index : any, item : any ){
      return index;
  }

}
