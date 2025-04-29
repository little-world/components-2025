import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {Message} from '../../message';

@Component({
  selector: 'app-sender',
  standalone: false,
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  send(): void {
    this.messageService.send(new Message('hello, aa'));

  }
}
