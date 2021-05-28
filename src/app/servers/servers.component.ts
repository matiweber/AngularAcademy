import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: ".app-servers",
  selector: "app-servers",
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Say Hi! M@ther F@%& ";
  serverName = "TestServer";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Ohh, Hi bro, How r u? you´re in the sv ' + this.serverName;

  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
