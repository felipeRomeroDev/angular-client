import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css'],
})
export class AlumnoListComponent {
  alumnos?: Alumno[];
  currentAlumno: Alumno = {};
  currentIndex = -1;
  nombre = '';

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.retrieveAlumnos();
  }

  retrieveAlumnos(): void {
    this.alumnoService.getAll().subscribe({
      next: (data) => {
        this.alumnos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveAlumnos();
    this.currentAlumno = {};
    this.currentIndex = -1;
  }

  setActiveAlumno(alumno: Alumno, index: number): void {
    this.currentAlumno = alumno;
    this.currentIndex = index;
  }

  removeAllAlumnos(): void {
    this.alumnoService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  buscarNombre(): void {
    this.currentAlumno = {};
    this.currentIndex = -1;

    this.alumnoService.findByNombre(this.nombre).subscribe({
      next: (data) => {
        this.alumnos = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
