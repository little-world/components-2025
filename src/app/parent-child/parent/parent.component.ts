import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  @ViewChild(ChildComponent)
  child!: ChildComponent;

  constructor() { }



  tochild(): void  {
    this.child.message = 'a message from the parent';
  }
}
