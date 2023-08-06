import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions: any
  url = 'http://localhost:8000/api/employee'

  getDataList() {
    return this.httpClient.get<{ code: number, message: string, data: any[] }>(this.url);
  }

  deleteData(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
