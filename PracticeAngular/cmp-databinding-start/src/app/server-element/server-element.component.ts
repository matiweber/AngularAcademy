import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
   Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, 
   OnInit, SimpleChanges, ViewChild, ViewEncapsulation

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
 OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterViewChecked, AfterContentChecked, 
 AfterViewInit, OnDestroy

 {

  @Input('svElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log( 'constructor called' )
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges!!!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!!!');
    console.log(this.header.nativeElement.textContent);
    console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck is Heree!');
  }

  ngAfterContentInit() {
    console.log('afterContentINIT CALLED');
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit ');
  }

  ngAfterViewChecked() {
    console.log('after view check NG');
  }

  ngOnDestroy() {
    console.log('OnDestroy!!!!')
  }

}
