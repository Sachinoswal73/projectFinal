import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { ProductsModel } from "./products.model";
import { BehaviorSubject, map } from "rxjs";

// @Injectable({
//     providedIn : 'root'
// })

@Injectable()

export class InventoryService {

        apiUrl = 'https://projectfinal-d1fe3-default-rtdb.asia-southeast1.firebasedatabase.app/inventory.json';

        productBehSub : BehaviorSubject<any> = new BehaviorSubject('initVal');

        addProductEmitr = new EventEmitter();

        constructor( private httpCl : HttpClient  ){

        }   

        addProductToDb(newProd : any){

            // this.addProductEmitr.emit('ssssssssssss');

            if ( newProd.pimg == '' ) {
                this.productBehSub.error('Image Path is requireddd');
            }

            if ( newProd.pstock > 1000 ) {
                this.productBehSub.complete();
            }

            return this.httpCl.post(this.apiUrl,newProd, {
                    headers : new HttpHeaders({ 'aph' : 'exprem hdr'}),
                    params : new HttpParams().set('prm','ParamVal')
            });
        }

        fetchProductsfromDb(){
            return this.httpCl.get(this.apiUrl).pipe( 
                map( ( rwDt : any) => {
                    let nArr = [];
                    for(let rd in rwDt) {
                        nArr.push({...rwDt[rd], iid : rd})
                    }
                    this.productBehSub.next(nArr);
                    return nArr;
                } )
             )
        }

        deleteProduct(iid : any){
            return this.httpCl.delete('https://projectfinal-d1fe3-default-rtdb.asia-southeast1.firebasedatabase.app/inventory/'+iid+'.json');
        }       

}