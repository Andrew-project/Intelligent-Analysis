import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcharsInfoComponent } from './echars-info.component';

describe('EcharsInfoComponent', () => {
  let component: EcharsInfoComponent;
  let fixture: ComponentFixture<EcharsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcharsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcharsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
