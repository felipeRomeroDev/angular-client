import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { AlumnoListComponent } from './components/alumnos-list/alumno-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    AlumnoDetailsComponent,
    AlumnoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
