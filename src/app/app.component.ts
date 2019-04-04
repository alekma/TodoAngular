import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskList  = ['Sprzatanie', 'Pranie', 'Odkurzanie'];
  taskDone = [];


  add(task) {
    this.taskList.push(task);
  }
  remove(task) {
    this.taskList = this.taskList.filter( e => e !== task)
  }
  done (task) {
    this.taskDone.push(task);
    this.remove(task);
  }
}
