import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurnitsComponent } from './securnits.component';

describe('SecurnitsComponent', () => {
  let component: SecurnitsComponent;
  let fixture: ComponentFixture<SecurnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurnitsComponent]
    });
    fixture = TestBed.createComponent(SecurnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
