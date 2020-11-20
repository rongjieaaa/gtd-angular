import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo, TodoItem } from '../todo';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todoList: Array<Todo>
  todo: Todo

  ngOnInit(): void {

    this.todoList = this.todoService.getTodoList();

    this.todo = this.todoList.length ? this.todoList[0] : this.todoService.getNewTodo();
  }

  chooseTodo(todo: Todo) {
    this.todo = todo;
  }

  addItem() {
    let item = this.todoService.getNewItem();
    this.todo.items.push(item);
  }

  completeItem(item: TodoItem) {
    item.completed = true;

    this.updateTodoItems(this.todo);
  }

  deleteItem(item: TodoItem) {
    item.deleted = true;
    this.updateTodoItems(this.todo);
  }

  updateTodoItems(todo?: Todo): Todo {

    if(todo == undefined) {
      todo = this.todo;
    }

    var allItems = todo.items.concat(todo.completedItems);

    todo.items = allItems.filter(e => {
      return !e.deleted && !e.completed;
    })

    todo.completedItems = allItems.filter(e => {
      return !e.deleted && e.completed;
    })

    return todo;
  }

}