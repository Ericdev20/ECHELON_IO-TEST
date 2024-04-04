import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/_interfaces/task';
import { TasksService } from 'src/app/core/_services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  isLoading: boolean = true;
  noTaskFound: boolean = false;
  constructor(private taskService: TasksService, private router: Router) {}
  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks() {
    this.taskService.allTask().subscribe(
      (data) => {
        this.tasks = data;
        this.isLoading = false;
        console.log('liste des tasks', data);
        if (this.tasks.length == 0) this.noTaskFound = true;
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches : ', error);
        this.isLoading = false;
      }
    );
  }
  goTask(id: any) {
    this.router.navigate(['detail-task', id]);
  }
}
