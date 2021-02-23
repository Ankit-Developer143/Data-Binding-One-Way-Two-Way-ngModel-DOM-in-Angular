import { Component } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  ServerId = 10;
  ServerStatus = 'offline';

  //Method

  getServerStatus() {
    return this.ServerStatus;
  }
  getServerId() {
    return this.ServerId;
  }
}
