import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NexusComponent } from "./components/nexus/nexus.component";
import { PropuestaGestionProyectosAgilesComponent } from "./components/propuesta-gestion-proyectos-agiles/propuesta-gestion-proyectos-agiles.component";
import { PropuestaClinicasMedicasComponent } from "./components/propuesta-clinicas-medicas/propuesta-clinicas-medicas.component";
import { PropuestaAsesoriaLegalComponent } from "./components/propuesta-asesoria-legal/propuesta-asesoria-legal.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule  ,RouterOutlet, NexusComponent, PropuestaGestionProyectosAgilesComponent, PropuestaClinicasMedicasComponent, PropuestaAsesoriaLegalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selected: string = 'propuesta1';

  selectPropuesta(propuesta: string) {
    this.selected = propuesta;
  }
}
