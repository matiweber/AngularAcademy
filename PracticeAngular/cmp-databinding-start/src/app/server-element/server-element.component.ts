import { Component, Input, OnChanges, OnInit, SimpleChange, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('svElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log( 'constructor called' )
  }

  ngOnChanges(changes: SimpleChange) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges!!!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ng onInit called!!!');
  }

}
