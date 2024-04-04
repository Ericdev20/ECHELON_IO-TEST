import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from 'src/app/pages/task-list/task-list.component';

const routes: Routes = [{ path: '', component: TaskListComponent }];

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TaskListModule {}
