import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LiveComponent } from './live/live.component';
const config: SocketIoConfig = {
  url: 'http://localhost:3000/', // socket server url;
  options: {
    transports: ['websocket'],
  },
};

@NgModule({
  declarations: [AppComponent, LiveComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
