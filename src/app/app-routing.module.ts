import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoListComponent } from './components/alumnos-list/alumno-list.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumnos/:id', component: AlumnoDetailsComponent },
  { path: 'add', component: AddAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
