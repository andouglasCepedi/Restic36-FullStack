import { Component, Input } from '@angular/core';
import { Curso } from '../../interfaces/curso';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  @Input() cursoData!:Curso;
}
