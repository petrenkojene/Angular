import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherdComponentComponent } from './therd-component.component';

describe('TherdComponentComponent', () => {
  let component: TherdComponentComponent;
  let fixture: ComponentFixture<TherdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherdComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
