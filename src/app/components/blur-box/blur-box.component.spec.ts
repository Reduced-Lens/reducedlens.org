import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurBoxComponent } from './blur-box.component';

describe('BlurBoxComponent', () => {
  let component: BlurBoxComponent;
  let fixture: ComponentFixture<BlurBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
