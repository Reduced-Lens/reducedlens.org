import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyopiaExplanationRouteComponent } from './myopia-explanation-route.component';

describe('MyopiaExplanationRouteComponent', () => {
  let component: MyopiaExplanationRouteComponent;
  let fixture: ComponentFixture<MyopiaExplanationRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyopiaExplanationRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyopiaExplanationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
