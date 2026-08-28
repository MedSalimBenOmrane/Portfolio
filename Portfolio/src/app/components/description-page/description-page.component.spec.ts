import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPageComponent } from './description-page.component';

describe('DescriptionPageComponent', () => {
  let component: DescriptionPageComponent;
  let fixture: ComponentFixture<DescriptionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionPageComponent]
    });
    fixture = TestBed.createComponent(DescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
