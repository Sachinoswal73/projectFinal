import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  todoList = [
    {
      title: 'delectus aut autem',
      completed: false,
      priority: 0,
    },
    {
      title: 'quis ut nam facilis et officia qui',
      completed: false,
      priority: 1,
    },
    {
      title: 'fugiat veniam minus',
      completed: false,
      priority: 2,
    },
    {
      title: 'et porro tempora',
      completed: true,
      priority: 1,
    },
    {
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
      priority: 0,
    },
  ];
  getmyData() {
    return [...this.todoList];
  }
}