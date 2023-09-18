import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  empSignuppForm : any;

  constructor( private router1 : Router, private ar1 : ActivatedRoute, private empSer : EmployeeService ){

  }


  ngOnInit(): void {

    this.empSignuppForm = new FormGroup({  
        username : new FormControl('', Validators.required),
        department : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
    })

    

  }

  
  navig(){
    this.router1.navigate(['signinn'],{
      relativeTo : this.ar1
    })
  }  


  onSignupp(){
    let empObj = {
      username : this.empSignuppForm.value.username,
      department : this.empSignuppForm.value.department,
      password : this.empSignuppForm.value.password
    }

    // console.log(empObj);
    this.empSer.onEmpSignupp(empObj).subscribe( ( oesu : any ) => {
          console.log(oesu);
    } )
  }


}
