import { SockerIoService } from './../socker-io.service';
import { Component, OnInit } from '@angular/core';
import { HttptestService } from '../httptest.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.sass'],
})
export class LiveComponent implements OnInit {
  data1: any = [];
  err: any = [];
  data: any = [];
  data2: any = [];
  
  constructor(
    private _SockerIoService: SockerIoService,
    private _HttptestService: HttptestService
  ) {}

  ngOnInit(): void {
    console.log('done');
    this._SockerIoService.onFetchLive().subscribe({
      next: (data: any) => {
        this.data.push(data);
    //     console.log(data.ip);
      },
      error: (err) => this.err.push(err),
    });
  }

  test() {
    this._HttptestService.getdata().subscribe({
      next: (data: any) => {
        console.log(data);

      },
    });
  }
  test2() {
    this._HttptestService.getAllFixtures().subscribe({
      next: (data: any) => {
        this.data1.push(data);
        console.log(data);
      },
    });
  }
  test3() {
    this._HttptestService.rmAllFixtures().subscribe({
      next: (data: any) => {
        this.data2.push(data);
        console.log(data);
      },
    });
  }
}
