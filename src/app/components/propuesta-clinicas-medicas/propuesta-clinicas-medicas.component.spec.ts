import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaClinicasMedicasComponent } from './propuesta-clinicas-medicas.component';

describe('PropuestaClinicasMedicasComponent', () => {
  let component: PropuestaClinicasMedicasComponent;
  let fixture: ComponentFixture<PropuestaClinicasMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropuestaClinicasMedicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestaClinicasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
