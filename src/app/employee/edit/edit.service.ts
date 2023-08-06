import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditModel } from './editModel';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  url = 'http://localhost:8000/api/employee'

  constructor(
    private httpClient: HttpClient
  ) { }

  getViewId(id: number) {
    return this.httpClient.get<EditModel>(`${this.url}/${id}`);
  }

  updateData(id: number, data: EditModel) {
    return this.httpClient.put(`${this.url}/${id}`, data);
  }
}
