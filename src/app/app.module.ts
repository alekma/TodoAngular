import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService } from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { SortNamePipe } from './shared/sort-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    TodoTasksComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    SortNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
