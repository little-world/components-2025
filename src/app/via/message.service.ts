import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Message} from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  subject = new Subject<Message>();

  send(sendMessage: Message): void {
     this.subject.next(sendMessage);

  }
}
