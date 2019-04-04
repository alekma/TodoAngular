import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})
export class TodoTasksComponent implements OnInit {

  @Input()
  taskList = [];
  @Output()
  emitDone = new EventEmitter();
  @Output()
  emitRemove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  remove(task) {
    this.emitRemove.emit(task);
  }

  done(task) {
    this.emitDone.emit(task);
  }
  getColor() {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }
}
