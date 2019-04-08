import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class TaskService {

 taskList = [];
 taskDone = [];

  tasksListObs = new BehaviorSubject(this.taskList);
  tasksDoneObs = new BehaviorSubject(this.taskDone);

  constructor() {
    this.taskList = ['Sprzatanie', 'Pranie', 'Odkurzanie'];
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
  getTaskListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }
  getTaskDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }
}
