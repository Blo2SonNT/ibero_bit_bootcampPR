import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoUsuarioComponent } from './contacto-usuario.component';

describe('ContactoUsuarioComponent', () => {
  let component: ContactoUsuarioComponent;
  let fixture: ComponentFixture<ContactoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
