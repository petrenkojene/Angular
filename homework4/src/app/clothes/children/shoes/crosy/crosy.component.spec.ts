import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosyComponent } from './crosy.component';

describe('CrosyComponent', () => {
  let component: CrosyComponent;
  let fixture: ComponentFixture<CrosyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrosyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
