import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';

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
    this.taskService.add(this.newTask);
    this.newTask = '';
  }
}
