import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { map, tap } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class EmployeeService {

    employeeTable = 'https://projectfinal-d1fe3-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json';

    newEmpEmitter = new EventEmitter();

    constructor( private httpCl : HttpClient ){

    }


    onEmpSignupp(empObj:any){
        // this.newEmpEmitter.emit('kkkkk');
        return this.httpCl.post(this.employeeTable,empObj);
    }

    onEmpSigninn(){
        return this.httpCl.get(this.employeeTable)
            .pipe(map( ( otoa : any ) => {
                    let arr = [];
                    for ( let oa in otoa ) {
                        arr.push({ ...otoa[oa] ,eid : oa});
                    }
                    return arr;
            } ))
    }

}