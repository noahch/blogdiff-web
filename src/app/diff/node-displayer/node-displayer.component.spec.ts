import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDisplayerComponent } from './node-displayer.component';

describe('NodeDisplayerComponent', () => {
  let component: NodeDisplayerComponent;
  let fixture: ComponentFixture<NodeDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
