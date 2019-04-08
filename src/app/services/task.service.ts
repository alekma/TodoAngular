import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TaskService {

  taskList = [];
  taskDone = [];

  tasksListObs = new BehaviorSubject([]);
  tasksDoneObs = new BehaviorSubject([]);

  constructor() {
    this.taskList = [
      { name: 'Sprzatanie', created: new Date() },
      { name: 'Pranie', created: new Date() },
      { name: 'Odkurzanie', created: new Date() }
    ];
    this.tasksListObs.next(this.taskList);
  }
  add(task) {
    this.taskList.push(task);
    this.tasksListObs.next(this.taskList);
  }
  remove(task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.tasksListObs.next(this.taskList);
  }
  done(task) {
    this.taskDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.taskDone);
  }
  getTaskListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  getTaskDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
