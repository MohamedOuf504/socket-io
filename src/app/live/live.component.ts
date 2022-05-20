import { SockerIoService } from './../socker-io.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.sass'],
})
export class LiveComponent implements OnInit {
  fixtuer: any = [];
  err: any = [];
  constructor(private _SockerIoService: SockerIoService) {}

  ngOnInit(): void {
    console.log('done');
    this._SockerIoService.onFetchLive().subscribe({
      next: (data: any) => {
        this.fixtuer.push(data);
        console.log(this.fixtuer);
      },
      error: (err) => this.err.push(err),
    });
  }
}
