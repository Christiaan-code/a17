import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinner2Component } from './loading-spinner-2.component';

describe('LoadingSpinner2Component', () => {
  let component: LoadingSpinner2Component;
  let fixture: ComponentFixture<LoadingSpinner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinner2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingSpinner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
