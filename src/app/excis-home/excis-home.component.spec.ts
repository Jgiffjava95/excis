import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcisHomeComponent } from './excis-home.component';

describe('ExcisHomeComponent', () => {
  let component: ExcisHomeComponent;
  let fixture: ComponentFixture<ExcisHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcisHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
