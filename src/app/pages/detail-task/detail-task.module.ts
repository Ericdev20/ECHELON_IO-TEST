import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailTaskComponent } from './detail-task.component';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [DetailTaskComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterModule.forChild([{ path: '', component: DetailTaskComponent }]),
  ],
})
export class DetailTaskModule {}
