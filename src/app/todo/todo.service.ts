import { Injectable } from '@angular/core';
import { Todo, TodoItem } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(): Array<Todo> {
    return [
      this.getNewTodo("生活"),
      this.getNewTodo("工作"),
    ];
  }

  getNewTodo(title?: string): Todo {
    return {
        title: title,
        items: [],
        completedItems: [],
        deletedItems: [],
    };
  }

  getNewItem(): TodoItem {
    return {
        title: "",
        completed: false,
        deleted: false,
    };
  }

}
