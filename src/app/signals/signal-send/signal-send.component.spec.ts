import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSendComponent } from './signal-send.component';

describe('SignalSendComponent', () => {
  let component: SignalSendComponent;
  let fixture: ComponentFixture<SignalSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalSendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
