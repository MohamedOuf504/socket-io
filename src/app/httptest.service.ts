import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttptestService {
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.post(
      'http://192.168.1.234/api/v1/predictionH2H/18439709',
      {
        voted: 'Draw',
      }
    );
  }
  getAllFixtures(){
  }
}
