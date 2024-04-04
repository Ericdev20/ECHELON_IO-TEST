import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';

const routes: Routes = [{ path: '', component: TaskListComponent }];

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SkeletonModule,
    TooltipModule,
  ],
})
export class TaskListModule {}
