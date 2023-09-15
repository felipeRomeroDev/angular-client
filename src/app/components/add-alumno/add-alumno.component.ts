import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent {
  alumno: Alumno = {
    nombre: '',
    apellidos: '',
    email: ''
  };
  submitted = false;

  constructor(private alumnoService: AlumnoService) {}

  saveAlumno(): void {
    const data = {
      nombre: this.alumno.nombre,
      apellidos: this.alumno.apellidos,
      email: this.alumno.email,
    };

    this.alumnoService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newAlumno(): void {
    this.submitted = false;
    this.alumno = {
      nombre: '',
      apellidos: '',
      email: ''
    };
  }
}
