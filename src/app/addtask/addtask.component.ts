import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  newTask;

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
  }
  add() {
    const task: Task = ({ name: this.newTask, created: new Date() });
    this.taskService.add(task);
    this.newTask = '';
  }
}
