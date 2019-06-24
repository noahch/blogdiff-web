import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSurveyComponent } from './mini-survey.component';

describe('MiniSurveyComponent', () => {
  let component: MiniSurveyComponent;
  let fixture: ComponentFixture<MiniSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
