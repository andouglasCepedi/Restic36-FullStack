import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/curso';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { ItemComponent } from '../../components/item/item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: 'details.component.html' ,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cursoService: CursoService = inject(CursoService);

  curso: Curso | undefined;

  constructor() {
      const cursoId = Number(this.route.snapshot.params['id']);
      this.curso = this.cursoService.getCursoById(cursoId);
  }

}
