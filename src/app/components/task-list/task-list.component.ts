import { Component } from '@angular/core';
import { Levels, Task } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  // TODO: Reformular como una lista
  tarea1: Task = {
    title: "Gata 1",
    description: 'La gata whas here!',
    completed: false,
    level: Levels.info
  }

  tarea2: Task = {
    title: "Wangton 2",
    description: 'Comida!',
    completed: true,
    level: Levels.block
  }

  tarea3: Task = {
    title: "Paito",
    description: 'Si me despiestas, hay tabla',
    completed: false,
    level: Levels.urgent
  }

  deleteTask(task: Task){
    //Todo: Sustituir por un slpice para eliminar de lista de tareas
    alert(`Se procede a elminar tarea: ${task.title}`);
  }

}
