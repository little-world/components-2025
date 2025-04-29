import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../../message';

@Component({
  selector: 'app-receiver',
  standalone: false,
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  message = new Message('');


  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.subject.asObservable().subscribe(
      data => this.message = data
    );

  }

}
