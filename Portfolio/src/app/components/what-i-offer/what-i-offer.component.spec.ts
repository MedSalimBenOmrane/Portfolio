import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIOfferComponent } from './what-i-offer.component';

describe('WhatIOfferComponent', () => {
  let component: WhatIOfferComponent;
  let fixture: ComponentFixture<WhatIOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIOfferComponent]
    });
    fixture = TestBed.createComponent(WhatIOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
