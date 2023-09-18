import { AbstractControl, ValidationErrors } from "@angular/forms";

export class StockValidator {

    static chkStock( sval : AbstractControl ) : ValidationErrors | null {

        if ( sval.value < 1 ) {
            return { invalidStock : true }
        }
        else {
            return null;
        }

    }

}