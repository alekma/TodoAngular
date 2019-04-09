import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})
export class TodoTasksComponent implements OnInit {

  taskList = [];


  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe(task => {
      this.taskList = task;
    });
   }

  ngOnInit() {
  }
  remove(task) {
    this.taskService.remove(task);
  }

  done(task: Task) {
    task.end = new Date();
    this.taskService.done(task);
  }
  getColor() {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }
}
