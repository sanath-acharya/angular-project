import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssoSkillComponent } from './update-asso-skill.component';

describe('UpdateAssoSkillComponent', () => {
  let component: UpdateAssoSkillComponent;
  let fixture: ComponentFixture<UpdateAssoSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssoSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssoSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
