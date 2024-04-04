import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../_interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url = '/api';

  constructor(private http: HttpClient) {}

  allTask(): Observable<any> {
    return this.http.get<Task>(`${this.url}/tasks`);
  }
  getTask(id: number): Observable<any> {
    return this.http.get<Task>(`${this.url}/task/${id}`);
  }

  createStudent(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.url}/create_student`, data);
  }
}
