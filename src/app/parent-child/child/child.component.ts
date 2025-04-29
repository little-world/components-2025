import {Component, Input, OnInit} from '@angular/core';
import {ParentComponent} from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
