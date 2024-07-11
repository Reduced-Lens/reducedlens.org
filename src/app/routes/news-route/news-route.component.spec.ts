import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRouteComponent } from './news-route.component';

describe('NewsRouteComponent', () => {
  let component: NewsRouteComponent;
  let fixture: ComponentFixture<NewsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
