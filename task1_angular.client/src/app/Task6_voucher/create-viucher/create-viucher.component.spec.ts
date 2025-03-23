import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViucherComponent } from './create-viucher.component';

describe('CreateViucherComponent', () => {
  let component: CreateViucherComponent;
  let fixture: ComponentFixture<CreateViucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateViucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateViucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
