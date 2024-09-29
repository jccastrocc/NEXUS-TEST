import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaAsesoriaLegalComponent } from './propuesta-asesoria-legal.component';

describe('PropuestaAsesoriaLegalComponent', () => {
  let component: PropuestaAsesoriaLegalComponent;
  let fixture: ComponentFixture<PropuestaAsesoriaLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropuestaAsesoriaLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestaAsesoriaLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
