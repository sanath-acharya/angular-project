import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssociateSkillsComponent } from './view-associate-skills.component';

describe('ViewAssociateSkillsComponent', () => {
  let component: ViewAssociateSkillsComponent;
  let fixture: ComponentFixture<ViewAssociateSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssociateSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociateSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
