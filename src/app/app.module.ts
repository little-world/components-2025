import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EenComponent } from './naast-elkaar/een/een.component';
import { TweeComponent } from './naast-elkaar/twee/twee.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';

import { SenderComponent } from './via/sender/sender.component';
import { ReceiverComponent } from './via/receiver/receiver.component';
import {DetailComponent} from './routes/detail/detail.component';
import {ContainerComponent} from './routes/container/container.component';
import { SignalSendComponent } from './signals/signal-send/signal-send.component';
import { SignalReceiveComponent } from './signals/signal-receive/signal-receive.component';

@NgModule({
  declarations: [
    EenComponent,
    TweeComponent,
    ParentComponent,
    ChildComponent,
    ContainerComponent,
    DetailComponent,
    SenderComponent,
    ReceiverComponent,
    AppComponent,
    SignalSendComponent,
    SignalReceiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
