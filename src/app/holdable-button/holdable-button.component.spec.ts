import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldableButtonComponent } from './holdable-button.component';

describe('HoldableButtonComponent', () => {
  let component: HoldableButtonComponent;
  let fixture: ComponentFixture<HoldableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldableButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoldableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
