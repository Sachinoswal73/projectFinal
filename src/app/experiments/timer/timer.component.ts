import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap, takeUntil, timer } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';
import { TimerObservService } from 'src/app/shared/timer-observ.service';
import { TimerService } from 'src/app/shared/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit, OnDestroy{

          emplArray : any;

          subscription !: Subscription;

          rcvdRes : any;

          constructor( private timerService : TimerService, private timObs : TimerObservService, private empSer : EmployeeService ){

          }




          ngOnInit(): void {


                this.timerService.getEmployeeData().subscribe( ( response : any ) => {
                            this.emplArray = response;
                            console.log(response);
                } )


                // this.subscription = timer(0,5000).pipe(
                //     switchMap(() => this.timerService.getEmployeeData() ),
                // ).subscribe( (response : any ) => {
                //   this.emplArray = response;
                //   console.log(this.emplArray);
                //   let allComplete = 0;
                //   this.emplArray.forEach( ( elm : any ) => {
                //         if ( elm.department == 'admin') {
                //           allComplete += 1;
                //         }
                //   });
                //   if( allComplete == this.emplArray.length ) {
                //       this.subscription.unsubscribe();
                //   }
                // })

                // this.timObs.setTimer().subscribe( ( coc : any ) => {
                //   this.emplArray = coc;
                //   console.log(this.emplArray);
                // } )  

                this.timObs.setTimer().subscribe( ( coc : any ) => {
                  this.emplArray = coc;
                  console.log(this.emplArray);
                  } )  

                this.empSer.newEmpEmitter.subscribe( ( nee : any ) => {
                    console.log(nee);
                   
                    this.timerService.getEmployeeData().subscribe( ( response : any ) => {
                      this.emplArray = response;
                      console.log(response);
                    } )

                    this.timObs.setTimer().subscribe( ( coc : any ) => {
                      this.emplArray = coc;
                      console.log(coc);
                      } )  
                } )
                   

          }

          ngOnDestroy(): void {
                
          }

}
