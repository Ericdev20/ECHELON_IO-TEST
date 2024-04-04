import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'task-list', pathMatch: 'full' },
  {
    path: 'task-list',
    loadChildren: () =>
      import('./pages/task-list/task-list.module').then(
        (m) => m.TaskListModule
      ),
  },
  {
    path: 'detail-task/:id',
    loadChildren: () =>
      import('./pages/detail-task/detail-task.module').then(
        (m) => m.DetailTaskModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
