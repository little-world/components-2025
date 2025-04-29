import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TweeComponent } from './twee.component';

describe('TweeComponent', () => {
  let component: TweeComponent;
  let fixture: ComponentFixture<TweeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TweeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
