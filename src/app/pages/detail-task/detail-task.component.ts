import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Task } from 'src/app/core/_interfaces/task';
import { TasksService } from 'src/app/core/_services/tasks.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss'],
  providers: [MessageService],
})
export class DetailTaskComponent {
  id: number;
  task: Task | undefined;
  isLoading: boolean = true;
  sendLoad: boolean = false;
  previewUrl!: any;
  studentForm: FormGroup;
  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.id = +this.route.snapshot.params['id'];
    this.studentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      photo: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.getTaskDetail();
  }
  getTaskDetail() {
    this.taskService.getTask(this.id).subscribe(
      (data) => {
        this.task = data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.error('Erreur lors de la récupération des tâches : ', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      // formData.append('photo ', this.studentForm.value.photo);

      this.studentForm.patchValue({
        photo: file,
      });
      // this.studentForm.patchValue({ file });
      this.studentForm.get('photo ')?.updateValueAndValidity();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez remplir correctement tous les champs !',
      });
      return;
    }
    this.sendLoad = true;
    const formData = new FormData();
    formData.append('firstname', this.studentForm.value.firstname);
    formData.append('lastname', this.studentForm.value.lastname);
    formData.append('photo', this.studentForm.get('photo')?.value);

    // console.log(formData);
    this.taskService.createStudent(formData).subscribe(
      (response) => {
        this.sendLoad = false;
        console.log('Elève crée avec succès:', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Elève crée avec succès !',
        });
        this.resetFormFields();
      },
      (error) => {
        console.error("Erreur lors de la creation de l'élève", error);
        this.sendLoad = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur !',
          detail: "Erreur lors de la creation de l'élève !",
        });
      }
    );
  }

  resetFormFields(): void {
    this.studentForm.reset();
    this.previewUrl = null;
  }
}
