import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdComponent } from './productd.component';

describe('ProductdComponent', () => {
  let component: ProductdComponent;
  let fixture: ComponentFixture<ProductdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
