import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiekawostkiComponent } from './ciekawostki.component';

describe('CiekawostkiComponent', () => {
  let component: CiekawostkiComponent;
  let fixture: ComponentFixture<CiekawostkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiekawostkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiekawostkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
