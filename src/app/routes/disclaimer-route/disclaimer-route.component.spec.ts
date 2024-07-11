import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerRouteComponent } from './disclaimer-route.component';

describe('DisclaimerRouteComponent', () => {
  let component: DisclaimerRouteComponent;
  let fixture: ComponentFixture<DisclaimerRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclaimerRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
