import { Component } from '@angular/core';
import { PainelComponent } from '../../components/painel/painel.component';
import { CursosComponent } from '../../components/cursos/cursos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PainelComponent, CursosComponent],
  template: `
    <section class="content">
      <app-painel></app-painel>
      <app-cursos></app-cursos>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
