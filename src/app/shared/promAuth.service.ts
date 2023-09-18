import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class PromAuthService {

    loggedIn = false;

    isAuthenticated(){
        const prom1 = new Promise( ( res : any ) => {
            setTimeout( () => {
                    res(this.loggedIn);
            }, 700  )
        } )
        return prom1;
    }

    loggedinn(){
        this.loggedIn = true;
        localStorage.setItem('localSession','loggdIn');
    }

    loggedOutt(){
        this.loggedIn = false;
        localStorage.clear();
    }

}