import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  protected cursosList: Curso[] = [
    {
      id: 1,
      name: "Full-Stack",
      description: "Construa o futuro da web! Aprenda a desenvolver aplicações completas, desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!",
      image: "../../../assets/images/card-fullstack.png",
      professor: ["Andouglas", "Thiago"],
      cargaHoraria: 300
    },
    {
      id: 2,
      name: "Ciência de Dados",
      description: "Desvende os segredos dos dados! Aprenda a extrair insights valiosos, desenvolver modelos preditivos e impulsionar decisões inteligentes com nossa trilha de Ciência de Dados.",
      image: "../../../assets/images/card-dados.png",
      professor: ["Ciro","Aluizio"],
      cargaHoraria: 250
    }
  ];

  constructor() {

  }

  getAllCursos(): Curso[] {
    return this.cursosList;
  }

  getCursoById(id: Number): Curso | undefined {
    return this.cursosList.find(curso => curso.id === id);
  }

  submitInscricao(name: string, email: string, phone: string ){
    console.log(name, email, phone);
  }
  
}
