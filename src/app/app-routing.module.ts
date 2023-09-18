import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SigninnComponent } from './employee/signinn/signinn.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AddProductsComponent } from './inventory/add-products/add-products.component';
import { ShowcaseComponent } from './inventory/showcase/showcase.component';
import { FormArrayComponent } from './experiments/form-array/form-array.component';
import { ReportsComponent } from './reports/reports.component';
import { TimerComponent } from './experiments/timer/timer.component';
import { AddEmplComponent } from './experiments/add-empl/add-empl.component';

const routes: Routes = [
  { path : '', component : EmployeeComponent },
  { path : 'signinn', component : SigninnComponent },
  { path : 'inventory/:eid', canActivate:[AuthGuard], component : InventoryComponent,
      children : [
        { path : '', component : ShowcaseComponent },
        { path : 'addProducts', component : AddProductsComponent},
        { path : 'reports', component : ReportsComponent },
      ]
  },
  { path : 'formArray', component : FormArrayComponent },
  { path : 'timer', component : TimerComponent },
  { path : 'addEmpl', component : AddEmplComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
