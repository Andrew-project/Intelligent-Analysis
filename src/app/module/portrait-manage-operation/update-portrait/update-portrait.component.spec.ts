import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePortraitComponent } from './update-portrait.component';

describe('UpdatePortraitComponent', () => {
  let component: UpdatePortraitComponent;
  let fixture: ComponentFixture<UpdatePortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
