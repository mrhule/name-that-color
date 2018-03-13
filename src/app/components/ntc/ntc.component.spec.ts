import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtcComponent } from './ntc.component';

describe('NtcComponent', () => {
  let component: NtcComponent;
  let fixture: ComponentFixture<NtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
