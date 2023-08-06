import { Injectable } from '@angular/core';
import { AddModel } from './addModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:8000/api/employee/'

  insertData(data: AddModel) {
    return this.httpClient.post(this.url, data)
  }
}
