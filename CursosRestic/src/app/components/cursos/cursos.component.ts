import { Component } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';
import { Curso } from '../../interfaces/curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoComponent, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursosList: Curso[] = [
    {
      id: 1,
      name: "Full-Stack",
      description: "Construa o futuro da web! Aprenda a desenvolver aplicações completas, desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!",
      image: "../../../assets/images/card-fullstack.png",
      professor: ["Andouglas","Thiago"],
    },
    {
      id: 2,
      name: "Ciência de Dados",
      description: "Desvende os segredos dos dados! Aprenda a extrair insights valiosos, desenvolver modelos preditivos e impulsionar decisões inteligentes com nossa trilha de Ciência de Dados.",
      image: "../../../assets/images/card-dados.png",
      professor: ["",""],
    }
  ];
}
