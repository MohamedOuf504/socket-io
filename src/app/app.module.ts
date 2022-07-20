import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LiveComponent } from './live/live.component';
import { HttpClientModule } from '@angular/common/http';
const config: SocketIoConfig = {
  url: 'http://localhost:3000', // socket server url;
  // url: 'https://elevenstats-be-stage.deploystage.com', // socket server url;
  options: {
    transports: ['websocket'],
    upgrade: true,
    transportOptions: false,
  },
};

@NgModule({
  declarations: [AppComponent, LiveComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
