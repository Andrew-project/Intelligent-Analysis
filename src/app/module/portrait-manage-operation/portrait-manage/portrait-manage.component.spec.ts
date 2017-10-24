import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitManageComponent } from './portrait-manage.component';

describe('PortraitManageComponent', () => {
  let component: PortraitManageComponent;
  let fixture: ComponentFixture<PortraitManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
