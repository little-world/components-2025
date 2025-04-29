import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EenComponent } from './een.component';

describe('EenComponent', () => {
  let component: EenComponent;
  let fixture: ComponentFixture<EenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
