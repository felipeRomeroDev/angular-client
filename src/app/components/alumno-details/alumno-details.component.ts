import { Component, Input, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css'],
})
export class AlumnoDetailsComponent {
  @Input() viewMode = false;

  @Input() currentAlumno: Alumno = {
    nombre: '',
    apellidos: '',
    email:''
  };

  message = '';

  constructor(
    private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAlumno(this.route.snapshot.params['id']);
    }
  }

  getAlumno(id: string): void {
    this.alumnoService.get(id).subscribe({
      next: (data) => {
        this.currentAlumno = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateEmail(email: string): void {
    const data = {
      nombre: this.currentAlumno.nombre,
      apellidos: this.currentAlumno.apellidos,
      email:this.currentAlumno.email,
    };

    this.message = '';

    this.alumnoService.update(this.currentAlumno.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentAlumno.email = email;
        this.message = res.message
          ? res.message
          : 'El email se modificó correctamente!';
      },
      error: (e) => console.error(e)
    });
  }

  updateAlumno(): void {
    this.message = '';

    this.alumnoService
      .update(this.currentAlumno.id, this.currentAlumno)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'El alumno fue modificado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAlumno(): void {
    this.alumnoService.delete(this.currentAlumno.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/alumnos']);
      },
      error: (e) => console.error(e)
    });
  }
}
