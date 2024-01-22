import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningPockerComponent } from './planning-pocker.component';

describe('PlanningPockerComponent', () => {
  let component: PlanningPockerComponent;
  let fixture: ComponentFixture<PlanningPockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningPockerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningPockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
