import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponentComponent } from './primeiro-component.component';

describe('PrimeiroComponentComponent', () => {
  let component: PrimeiroComponentComponent;
  let fixture: ComponentFixture<PrimeiroComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
