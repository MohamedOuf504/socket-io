import { SockerIoService } from './../socker-io.service';
import { Component, OnInit } from '@angular/core';
import { HttptestService } from '../httptest.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.sass'],
})
export class LiveComponent implements OnInit {
  fixtuer: any = [];
  err: any = [];
  constructor(
    private _SockerIoService: SockerIoService,
    private _HttptestService: HttptestService
  ) {}

  ngOnInit(): void {
    console.log('done');
    this._SockerIoService.onFetchLive().subscribe({
      next: (data: any) => {
        this.fixtuer.push(data);
        console.log(data.ip);
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
}
