import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import { PromAuthService } from 'src/app/shared/promAuth.service';
@Component({
  selector: 'app-signinn',
  templateUrl: './signinn.component.html',
  styleUrls: ['./signinn.component.scss']
})

export class SigninnComponent implements OnInit {

  empSigninnForm : any;
  
  constructor( private router1 : Router, private ar1 : ActivatedRoute, private empSer : EmployeeService, private pas : PromAuthService ){

  }


  ngOnInit(): void {

    this.empSigninnForm = new FormGroup({  
        username : new FormControl('', Validators.required),
        // department : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
    })

    

  }

  
  navig(){
    this.router1.navigate([''],{
      relativeTo : this.ar1
    })
  }  


  onSigninn(){
    let empObj = {
      username : this.empSigninnForm.value.username,
      // department : this.empSignuppForm.value.department,
      password : this.empSigninnForm.value.password
    }
    let rightCredentials = false;
    // console.log(empObj);
    this.empSer.onEmpSigninn().subscribe( ( oesu : any ) => {
          // console.log(oesu);
          oesu.forEach( (elm : any) => {
              // console.log(elm.username, this.empSigninnForm.value.username)
              if( elm.username == this.empSigninnForm.value.username && elm.password == this.empSigninnForm.value.password ) {
                  // console.log(elm.username,elm.eid);
                  rightCredentials = true;
                  this.pas.loggedinn();
                  this.router1.navigate(['../inventory',elm.eid],
                    {
                        relativeTo : this.ar1,
                        queryParams : { dept : elm.department }
                    }
                  )
              }
          });
          if (!rightCredentials) {
            alert('Kindly enter the right credentials.');
          }
    } )
   
  }



}
