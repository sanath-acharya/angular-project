import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssociateComponent } from './view-associate.component';

describe('ViewAssociateComponent', () => {
  let component: ViewAssociateComponent;
  let fixture: ComponentFixture<ViewAssociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
