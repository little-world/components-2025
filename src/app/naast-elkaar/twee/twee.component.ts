import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twee',
  standalone: false,
  templateUrl: './twee.component.html',
  styleUrls: ['./twee.component.css']
})
export class TweeComponent implements OnInit {

  message: string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
