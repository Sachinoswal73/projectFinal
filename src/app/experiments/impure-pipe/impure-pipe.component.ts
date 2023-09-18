import { Component } from '@angular/core';

@Component({
  selector: 'app-impure-pipe',
  templateUrl: './impure-pipe.component.html',
  styleUrls: ['./impure-pipe.component.scss']
})

export class ImpurePipeComponent {

  user = { name:'spo', score: 73 };

  nameString = '';
  
  employees = [{
      firstName: 'Rohit',
      lastName: 'Sharma',
      dept: 'Finance',
      salary: 50000,
      doj: new Date('2012-04-22')
    },
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      dept: 'Sales',
      salary: 600,
      doj: new Date('2016-09-16')
    },
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      dept: 'IT',
      salary: 100000,
      doj: new Date('2021-09-03')
    }
  ]
 
  addUser(){
    this.employees.push({
      firstName: 'Rahul',
      lastName: 'Yadav',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2016-11-19')
    })
  }
 
  reset(){
    this.employees = this.employees.slice()
  }

}
