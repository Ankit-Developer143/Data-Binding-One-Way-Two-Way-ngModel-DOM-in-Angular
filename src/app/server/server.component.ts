import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  //ng model Values
  name;

  //button Effects
  allownewuser = false;

  serverCreation = 'No Server Created Yet!';
  constructor() {
    setTimeout(() => {
      this.allownewuser = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreation = 'Server Created';
  }

  //one-Way and Two-Way DataBinding
  servername = 'TestServer';
  onUpdateServerName(event: Event) {
    this.servername = (<HTMLInputElement>event.target).value;
  }

  serverName; //ngModel
  servercreated = false;
  serverstatus = 'there is no server Created';
  onCreateServer2() {
    this.servercreated = true;
    this.serverstatus = 'Server Created';
  }

  servers = ['server1', 'server2'];

  //for Loops
  onCreateServer3() {
    this.servers.push(this.serverName);

  }
}
