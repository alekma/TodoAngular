import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  newTask;

  @Output()
  emitTask = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  add() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }
}
