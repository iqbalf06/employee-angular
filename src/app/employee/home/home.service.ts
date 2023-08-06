import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8000/api/employee';

  getDataList() {
    return this.httpClient.get<{ code: number, message: string, data: any[] }>(this.url);
  }
}
