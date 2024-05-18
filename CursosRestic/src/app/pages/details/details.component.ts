import { Component, inject } from '@angular/core';
import { Curso } from '../../interfaces/curso';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { ItemComponent } from '../../components/item/item.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ItemComponent, CommonModule, ReactiveFormsModule],
  templateUrl: 'details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cursoService: CursoService = inject(CursoService);
  curso: Curso | undefined;

  applyForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('')
    }
  );

  constructor() {
    const cursoId = Number(this.route.snapshot.params['id']);
    this.cursoService.getCursoById(cursoId).then((curso) => {
      this.curso = curso;
    })
  }

  submitInscricao(){
    this.cursoService.submitInscricao(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.phone ?? '',
    )
  };

}
