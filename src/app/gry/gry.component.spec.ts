import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GryComponent } from './gry.component';

describe('GryComponent', () => {
  let component: GryComponent;
  let fixture: ComponentFixture<GryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
