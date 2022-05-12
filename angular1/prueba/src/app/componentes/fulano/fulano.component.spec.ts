import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulanoComponent } from './fulano.component';

describe('FulanoComponent', () => {
  let component: FulanoComponent;
  let fixture: ComponentFixture<FulanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
