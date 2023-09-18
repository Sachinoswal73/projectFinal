import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from './data.service';


@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})

export class FormArrayComponent {

  form: any;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      credentials: this.fb.array([fb.group({
          username : new FormControl('')
      })]),
    });

  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: new FormControl('')
      
    }));
    console.log(creds)
  }
  

}



