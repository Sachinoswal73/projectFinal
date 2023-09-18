import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DataService } from './data.service';

export interface Item {
  title: string;
  completed: boolean;
  priority: number;
}

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})

export class FormArrayComponent {

  constructor(private serv: DataService, private fb: FormBuilder) {}

  prio = [0, 1, 2];
  ToDoListForm: any;
  itemsList: Item[] = [];

  defaultItem = {
    title: '',
    completed: false,
    priority: null,
  };

  get itemsArray() {
    return <FormArray>this.ToDoListForm.get('items');
  }

  ngOnInit(): void {
    this.ToDoListForm = this.fb.group({
      items: this.fb.array([]),
    });
    this.itemsList = this.serv.getmyData();
    this.displayItems();
  }

  createItem(item: any) {
    return this.fb.group({
      title: [item.title, [Validators.required]],
      completed: [item.completed, [Validators.required]],
      priority: [item.priority, [Validators.required]],
    });
  }

  addNewItem() {
    let formGroup = this.createItem(this.defaultItem);
    this.itemsArray.push(formGroup);
    console.log(this.ToDoListForm);
  }

  displayItems() {
    let transformedItems = this.itemsList.map((item: any) =>
      this.createItem(item)
    );
    console.log(transformedItems);
    this.ToDoListForm.setControl('items', this.fb.array(transformedItems));
    console.log(this.ToDoListForm);
  }

  deleteItem(i: number) {
    this.itemsArray.removeAt(i);
  }

  deleteAll() {
    this.itemsArray.clear();
  }

  track(item: any, index: number) {
    return index;
  }
}


