import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlocComponent } from './card-bloc.component';

describe('CardBlocComponent', () => {
  let component: CardBlocComponent;
  let fixture: ComponentFixture<CardBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
