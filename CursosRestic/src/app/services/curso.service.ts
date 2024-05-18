import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:3000/cursos';
  constructor() {

  }

  async getAllCursos(): Promise<Curso[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  };

  async getCursoById(id: Number): Promise<Curso | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? {};
  }

  submitInscricao(name: string, email: string, phone: string ){
    console.log(name, email, phone);
  }
  
}
