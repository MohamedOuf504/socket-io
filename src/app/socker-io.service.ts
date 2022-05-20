import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SockerIoService {
  constructor(private socket: Socket) {}
  // listen event
  onFetchLive() {
    return this.socket.fromEvent('live');
  }
  //sum two num
}
