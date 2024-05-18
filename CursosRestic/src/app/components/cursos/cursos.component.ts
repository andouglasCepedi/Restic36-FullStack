import { Component, inject } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';
import { Curso } from '../../interfaces/curso';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoComponent, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursosList: Curso[] = [];
  cursoService: CursoService = inject(CursoService);

  constructor(){
    this.cursoService.getAllCursos().then((cursosList: Curso[]) => {
      this.cursosList = cursosList;
    })
  }
}
