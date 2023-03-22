import { Component, Input } from '@angular/core';
import { Task, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task | undefined;

  deleteTask(){
    console.log("Eliminar tarea ", this.task?.title);
  }
}
