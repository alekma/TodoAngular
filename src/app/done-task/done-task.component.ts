import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent implements OnInit {


  taskDone = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTaskDoneObs().subscribe(task => {
      this.taskDone = task;
    });
  }

  ngOnInit() {
  }

}
