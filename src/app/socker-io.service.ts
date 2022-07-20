import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SockerIoService {
  constructor(private socket: Socket) {}
  // listen event
  onFetchLive() {
    console.log(this.socket.emit('x', 'hi'));
    console.log(this.socket.on('x', (data: any)=>{
      console.log(data);
      
    }));

    return this.socket.fromEvent(
      'live_bulleen-lions-vs-manningham-united-blues-18460031'
    );
  }
  //sum two num
}
