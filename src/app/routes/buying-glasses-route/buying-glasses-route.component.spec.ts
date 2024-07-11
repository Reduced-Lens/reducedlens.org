import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingGlassesRouteComponent } from './buying-glasses-route.component';

describe('BuyingGlassesRouteComponent', () => {
  let component: BuyingGlassesRouteComponent;
  let fixture: ComponentFixture<BuyingGlassesRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyingGlassesRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyingGlassesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
