import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/curso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
  <h1>Curso {{cursoId}}</h1>

  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cursoId = 0;

  constructor() {
      this.cursoId = Number(this.route.snapshot.params['id']);
  }

}
