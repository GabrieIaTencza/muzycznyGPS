import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrawaComponent } from './prawa.component';

describe('PrawaComponent', () => {
  let component: PrawaComponent;
  let fixture: ComponentFixture<PrawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrawaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
