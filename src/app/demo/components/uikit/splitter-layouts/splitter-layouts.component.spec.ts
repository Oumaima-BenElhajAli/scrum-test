import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterLayoutsComponent } from './splitter-layouts.component';

describe('SplitterLayoutsComponent', () => {
  let component: SplitterLayoutsComponent;
  let fixture: ComponentFixture<SplitterLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitterLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitterLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
