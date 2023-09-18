import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../shared/inventory.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {

    latestInventory : any;

    totalInventoryCost = 0;

    totalInventoryPrice = 0;

    totalProfit !: number;

    profitPerc : any;

    profitPie : any;

    profitConic : any;

    maxPrc = 0;

    currentPrice : number = 70000;

    constructor( private invSer : InventoryService ){

    }

    ngOnInit(): void {
      
        this.invSer.fetchProductsfromDb().subscribe( ( isfp : any ) => {
              this.latestInventory = isfp;
              // console.log(this.latestInventory);
                this.latestInventory.forEach( ( li : any ) => {
                if ( this.maxPrc < +li.pcost ){
                    this.maxPrc = +li.pcost;
                }
                this.totalInventoryCost = this.totalInventoryCost + (li.pcost * li.pstock);
                this.totalInventoryPrice = this.totalInventoryPrice + ( li.pprice * li.pstock );
                // console.log(this.totalInventoryCost);
              } )
              
              this.profitPerc = ( (this.totalInventoryPrice - this.totalInventoryCost) / this.totalInventoryCost * 100 ).toFixed(2);

              this.profitPie = (this.profitPerc * 360 / 100 ).toFixed(0);

              this.profitConic = `
              conic-gradient(
                pink ` + this.profitPie + `deg, 
                lightblue 0 
                )
                `

              // this.profitPie

        } )
        
        // console.log(this.latestInventory);
        // console.log(this.totalInventoryPrice);

       

    }

}
