import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPortraitComponent } from './new-portrait.component';

describe('NewPortraitComponent', () => {
  let component: NewPortraitComponent;
  let fixture: ComponentFixture<NewPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
