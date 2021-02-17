import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanedComponent } from './planed.component';

describe('PlanedComponent', () => {
  let component: PlanedComponent;
  let fixture: ComponentFixture<PlanedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
