import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVoucherComponent } from './display-voucher.component';

describe('DisplayVoucherComponent', () => {
  let component: DisplayVoucherComponent;
  let fixture: ComponentFixture<DisplayVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
