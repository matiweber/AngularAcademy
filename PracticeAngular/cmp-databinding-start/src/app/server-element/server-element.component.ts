import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation: ViewEncapsulation.
})
export class ServerElementComponent implements OnInit {

 @Input('svElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {

  }

}
