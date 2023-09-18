import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "@angular/common/locales/global/en-IN";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SigninnComponent } from './employee/signinn/signinn.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductsComponent } from './inventory/add-products/add-products.component';
import { ShowcaseComponent } from './inventory/showcase/showcase.component';
import { FormArrayComponent } from './experiments/form-array/form-array.component';
import { ReportsComponent } from './reports/reports.component';
import { ShowProductsComponent } from './experiments/show-products/show-products.component';
import { InventoryService } from './shared/inventory.service';
import { ImpurePipeComponent } from './experiments/impure-pipe/impure-pipe.component';
import { SearchPipe } from './shared/search.pipe';
import { ColorPipe } from './shared/color.pipe';
import { RangePipe } from './shared/range.pipe';
import { PiechartDirective } from './shared/piechart.directive';
import { TimerComponent } from './experiments/timer/timer.component';
import { AddEmplComponent } from './experiments/add-empl/add-empl.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InventoryComponent,
    SigninnComponent,
    AddProductsComponent,
    ShowcaseComponent,
    FormArrayComponent,
    ReportsComponent,
    ShowProductsComponent,
    ImpurePipeComponent,
    SearchPipe,
    ColorPipe,
    RangePipe,
    PiechartDirective,
    TimerComponent,
    AddEmplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en-IN" }, { provide : InventoryService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
