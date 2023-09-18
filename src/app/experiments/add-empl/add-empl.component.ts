import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-empl',
  templateUrl: './add-empl.component.html',
  styleUrls: ['./add-empl.component.scss']
})

export class AddEmplComponent implements OnInit {
  
  empForm : any;

  constructor( private empSer : EmployeeService){

  }

  ngOnInit(): void {
        this.empForm = new FormGroup({
          uname : new FormControl(''),
          dept : new FormControl('')
        })
  }

  onSubmit(){
        console.log(this.empForm);
        let empObj = {
              username : this.empForm.value.uname,
              department : this.empForm.value.dept
        }
        console.log(empObj);
        this.empSer.onEmpSignupp(empObj).subscribe( ( eso : any ) => {
              console.log(eso);
              this.empSer.newEmpEmitter.emit('kkkkk');
        } )
  }

}
