import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TimerService implements OnInit {

  emplUrl = 'https://projectfinal-d1fe3-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json';

  constructor( private httpClient : HttpClient ) { }

  ngOnInit(): void {



  }

  getEmployeeData(){
      return this.httpClient.get(this.emplUrl).pipe( map( ( convData : any ) => {
              let arr = [];
              for ( let cd in convData ) {
                  arr.push({ ...convData[cd] ,eid : cd});
              }
              return arr;
      } ) )
  }

}
