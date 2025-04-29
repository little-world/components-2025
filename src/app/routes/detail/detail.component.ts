import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  message!: string
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.params['message']
  }

}
