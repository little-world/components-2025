import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalReceiveComponent } from './signal-receive.component';

describe('SignalReceiveComponent', () => {
  let component: SignalReceiveComponent;
  let fixture: ComponentFixture<SignalReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalReceiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
