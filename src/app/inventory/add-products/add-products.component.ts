import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from 'src/app/shared/inventory.service';
import { IProduct } from 'src/app/shared/iproduct';
import { ProductsModel } from 'src/app/shared/products.model';
import { StockValidator } from 'src/app/shared/stock.validator';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})

export class AddProductsComponent implements OnInit {

  addProductForm : any;

  discAmt !: number;
  profitAmt !: number;
  finalPrice !: number;

  newProdId !: number;
  
  constructor( private invSer : InventoryService ){

  }

  ngOnInit(): void {     

      this.invSer.fetchProductsfromDb().subscribe( ( isfp : any ) => {
                  console.log(isfp);
                  this.newProdId = isfp.length + 1;
      } )

      this.addProductForm = new FormGroup({
            pname : new FormControl('', Validators.required),
            pimg : new FormControl(''),
            pcost : new FormControl(''),
            pprofit : new FormControl(''),
            pdisc : new FormControl(''),
            pprice : new FormControl(''),
            pstock : new FormControl('', StockValidator.chkStock),
            pcat : new FormControl(''),
            // pclr : new FormArray([new FormControl('')])
            pclr : new FormArray([new FormGroup({
                  clr : new FormControl('')
            })])
      })

  }


  onPCost(){
      this.addProductForm.controls['pdisc'].setValidators([Validators.required]);
      // this.addProductForm.get('pdisc').disable();
      console.log('trgrd');
      this.addProductForm.controls['pdisc'].updateValueAndValidity();
  }


  calProfit( pcost : number, pprof : number = 0, pdisc : number = 0){
     if ( pcost && pprof ){
      this.profitAmt = (pcost * pprof / 100 );
      let totalPrice = pcost + (pcost * pprof / 100 ) ;
      this.discAmt = (totalPrice * pdisc / 100 );
      this.finalPrice = totalPrice - this.discAmt ;
     }
  }


  get pclrArray(){
      return this.addProductForm.get('pclr') as FormArray;
  }

  addColor(){
      const pc = this.addProductForm.controls.pclr as FormArray;
      pc.push(new FormGroup({
            clr : new FormControl('')
            }))
      //   this.addProductForm.get('pclr').push(new FormControl(''));
        // let colors = this.addProductForm.get('pclr') as FormArray;
        // colors.push(new FormControl(''));
  }

  onAddProduct(){
      
      // console.log(this.addProductForm.value.pclr); 

      try {
                  
            let newProduct = new ProductsModel( this.newProdId, this.addProductForm.value.pname, this.addProductForm.value.pimg, this.addProductForm.value.pcost, this.addProductForm.value.pprofit, this.addProductForm.value.pdisc, this.addProductForm.value.pprice, this.addProductForm.value.pstock, this.addProductForm.value.pcat, this.addProductForm.value.pclr );

            
            if ( this.addProductForm.value.pstock == 1 ) {
                 console.log(this.addProductForm.value.pstock);
                 throw new Error('Stockk Qty is jst 1');
            }

            this.invSer.addProductToDb(newProduct).subscribe( ( aptd : any ) => {
                  // console.log(aptd);
                 
                  this.invSer.addProductEmitr.emit('ssssssssssss');

                  this.invSer.fetchProductsfromDb().subscribe( ( isfp : any ) => {
                        console.log(isfp);
                        // this.invSer.addProductEmitr.emit('addProdEmtr');
                        // console.log('addProdEmitr emitted');
                  //     this.invSer.addProductEmitr.emit('addProdEmtr');
                  } )
                 
            } )

            alert('Product is added into the system.');

            this.addProductForm.reset();


      }

      catch(error){
            alert(error);
      }

      finally {
            console.log('I run anyway');
      }

  }

}
