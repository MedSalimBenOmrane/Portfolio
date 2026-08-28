import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociativeLifeComponent } from './associative-life.component';

describe('AssociativeLifeComponent', () => {
  let component: AssociativeLifeComponent;
  let fixture: ComponentFixture<AssociativeLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociativeLifeComponent]
    });
    fixture = TestBed.createComponent(AssociativeLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
