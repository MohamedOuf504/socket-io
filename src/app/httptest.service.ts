import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttptestService {
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.post('http://localhost:3000/api/v1/predictionH2H/18439709', {
      voted: 'Coast-Stima-236608',
    });
  }
  getAllFixtures() {
    return this.http.get('http://localhost:3000/api/v1/predictionH2H/18439709');
  }
}
