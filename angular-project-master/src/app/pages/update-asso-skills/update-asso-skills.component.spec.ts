import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssoSkillsComponent } from './update-asso-skills.component';

describe('UpdateAssoSkillsComponent', () => {
  let component: UpdateAssoSkillsComponent;
  let fixture: ComponentFixture<UpdateAssoSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssoSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssoSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
