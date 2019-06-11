import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffSurveyComponent } from './diff-survey.component';

describe('DiffSurveyComponent', () => {
  let component: DiffSurveyComponent;
  let fixture: ComponentFixture<DiffSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
