import { Component } from '@angular/core';
import {Alumno} from 'src/app/models/alumno.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})


export class ListaAlumnosComponent {
  //alumnos: Alumno[] \= [
  alumnos: Alumno[] = [
    
    {
      apellido: 'Pérez',
      nombre: 'Juan',
      nota: 9,
    },
    {
      apellido: 'Alvarez',
      nombre: 'Pedro',
      nota: 6,
    },
    {
      apellido: 'Orozco',
      nombre: 'María',
      nota: 2,
    },
    {
      apellido: 'Miranda',
      nombre: 'Laura',
      nota: 8,
    },
    {
      apellido: 'Santana',
      nombre: 'Luis',
      nota: 3,
    },
  ]
    
}

