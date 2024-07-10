import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlmExplanationRouteComponent } from './rlm-explanation-route.component';

describe('RlmExplanationRouteComponent', () => {
  let component: RlmExplanationRouteComponent;
  let fixture: ComponentFixture<RlmExplanationRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RlmExplanationRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RlmExplanationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
