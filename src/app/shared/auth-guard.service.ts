import { ActivatedRouteSnapshot, CanActivate, ROUTER_CONFIGURATION, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { PromAuthService } from "./promAuth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class AuthGuard implements CanActivate {

    constructor( private pas : PromAuthService, private router2 : Router  ){

    }
   
    canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {

          return this.pas.isAuthenticated()
                .then( ( aut : any ) => {
                        if (aut || localStorage.getItem('localSession')) {
                            return true;
                        }
                        else {
                            this.router2.navigate(['signinn']);
                            return false;
                        }
                } )

    }   

}