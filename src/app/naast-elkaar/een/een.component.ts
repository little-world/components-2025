import {Component, Input, OnInit} from '@angular/core';
import {TweeComponent} from '../twee/twee.component';

@Component({
  selector: 'app-een',
  standalone: false,
  templateUrl: './een.component.html',
  styleUrls: ['./een.component.css']
})
export class EenComponent implements OnInit {

  constructor() { }

  @Input()
  twee!: TweeComponent;

  ngOnInit(): void {
    this.twee.message = 'a message from een';
  }

}
