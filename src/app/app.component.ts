import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask = '';
  taskList = [];
  taskDone = [];


  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
    console.log(this.taskList);
  }
  remove(task) {
    this.taskList = this.taskList.filter( e => e !== task)
  }
  done (task) {
    this.taskDone.push(task);
    this.remove(task);
  }
}
