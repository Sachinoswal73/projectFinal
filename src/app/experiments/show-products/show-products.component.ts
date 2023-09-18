import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/shared/inventory.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})

export class ShowProductsComponent implements OnInit {

    updProductList : any;

    updProdBehSub : any;

    updProdObserver = {
      next : ( dataa : any ) => { this.updProdBehSub = dataa },
      error : (err : any) => { console.log(err) },
      complete : () => { console.log('complteeddd') }
    }

    constructor( private invSer : InventoryService ){

    }

    ngOnInit(): void {
      
      this.invSer.fetchProductsfromDb().subscribe( ( ifp : any ) => {
            console.log(ifp);
            this.updProductList = ifp;
      } )

      this.invSer.addProductEmitr.subscribe( ( ape : any ) => {
            this.invSer.fetchProductsfromDb().subscribe( ( ifp : any ) => {
              console.log(ifp);
              this.updProductList = ifp;
            } )    
      } )

      // this.invSer.productBehSub.subscribe( ( ipb : any ) => {
      //       console.log(ipb);
      //       this.updProdBehSub = ipb;
      // } )

      this.invSer.productBehSub.subscribe(this.updProdObserver);

    }

}
