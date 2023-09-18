import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subscription, bufferCount, filter, interval, map, switchMap, timer } from "rxjs";
import { EmployeeService } from "./employee.service";
import { TimerService } from "./timer.service";
// import { SharedService } from "./shared.service";

@Injectable({
    providedIn : "root"
})

export class TimerObservService {

  newInterval : BehaviorSubject<any> = new BehaviorSubject('initVal');

  empAPiUrl = 'https://projectfinal-d1fe3-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json';

  latArray : any;


  constructor( private httpClient : HttpClient, private empSer : EmployeeService, private timerService : TimerService ){

        this.timerService.getEmployeeData().subscribe( ( employeeRecords : any ) => {
          this.latArray = employeeRecords;
        } )
        this.newInterval.next(this.latArray);

  }


  setTimer(){

      setInterval( () => {
          // console.log(this.latArray);
          this.timerService.getEmployeeData().subscribe( ( employeeRecords : any ) => {
            this.latArray = employeeRecords;
          } )

          console.log(this.latArray);

          this.newInterval.next(this.latArray);

          let allComplete = 0;

          this.latArray.forEach( ( la : any ) => {
                if( la.department == 'admin' ){
                    allComplete += 1;
                }
          } )

          if ( allComplete == this.latArray.length ){
            this.newInterval.complete();
          }

      }, 5000 )
      
      let result = this.newInterval.pipe( 
          map( ( rf : any ) => {
              return rf;
          } )
      )

      return result;

  }

}