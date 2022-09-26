import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneDetailComponent } from './milestone-detail.component';

describe('EducationDetailComponent', () => {
  let component: MilestoneDetailComponent;
  let fixture: ComponentFixture<MilestoneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestoneDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
