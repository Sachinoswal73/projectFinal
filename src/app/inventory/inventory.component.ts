import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromAuthService } from '../shared/promAuth.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {

  constructor( private router2 : Router, private ar2 : ActivatedRoute, private pas : PromAuthService ){

  }

  prm : any;
  qprm : any;

  ngOnInit(): void {

    this.ar2.params.subscribe( ( aprm : any ) => {
          // console.log(aprm.eid);
          this.prm = aprm.eid; 
    } ) 

    this.ar2.queryParams.subscribe( ( aqprm : any ) => {
          console.log(aqprm.dept);
          this.qprm = aqprm.dept;
    } )

  }

  onLogout(){
      this.pas.loggedOutt();
      this.router2.navigate(['signinn'])
  }


}
