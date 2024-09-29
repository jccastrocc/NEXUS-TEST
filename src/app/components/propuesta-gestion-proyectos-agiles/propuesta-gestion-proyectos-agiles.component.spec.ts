import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaGestionProyectosAgilesComponent } from './propuesta-gestion-proyectos-agiles.component';

describe('PropuestaGestionProyectosAgilesComponent', () => {
  let component: PropuestaGestionProyectosAgilesComponent;
  let fixture: ComponentFixture<PropuestaGestionProyectosAgilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropuestaGestionProyectosAgilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestaGestionProyectosAgilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
