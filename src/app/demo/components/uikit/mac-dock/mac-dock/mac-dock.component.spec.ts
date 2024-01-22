import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDockComponent } from './mac-dock.component';

describe('MacDockComponent', () => {
  let component: MacDockComponent;
  let fixture: ComponentFixture<MacDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacDockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
