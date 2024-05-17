import { Component, Input } from '@angular/core';
import { Curso } from '../../interfaces/curso';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  @Input() cursoData!:Curso;
}
