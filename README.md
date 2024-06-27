# Restic36-FullStack<div align="center">
<img src="CursosRestic\src\assets\images\logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade V (Angular) - Prática 5

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=HTML|CSS|TYPESCRIPT|ANGULAR&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Avançando na nossa aplicação, nesta prática usaremos o conceito de serviço para adicionar lógica a nossa aplicação, de forma que poderemos injeta-los nos componentes que prentendemos utilizar. 

No nosso exemplo, adicionamos os nossos dados diretamente no componente Cursos. Vimos na unidade IV, que fazemos requisições a uma API, que nos retorna os dados que queremos utilizar. Nas próximas práticas, simularemos esse comportamento. Por enquanto, adicionaremos a lógica de requisitar os dados ao servidor em um serviço.

Para criar um serviço, usamos

```shell
ng generate service nome_do_serviço
```
No caso do nosso exemplo, criamos um serviço chamado curso e criamos dois métodos: um que vai receber todos os dados do curso (getAllCursos()) e um que receberá um curso específico pelo ID (getCursoById(id: Number)).

```typescript
getAllCursos(): Curso[] {
    return this.cursosList;
  }

  getCursoById(id: Number): Curso | undefined {
    return this.cursosList.find(curso => curso.id === id);
  }

```
O primeiro método será usado na página <em>home</em> e o segundo na página </em>details</em>. Perceba que também passamos o <em>array</em> <b>cursosList</b> para os serviço que criamos. Nas próximas práticas, faremos as chamadas a uma api(simulada), diretamente neste serviço.

Para usar o serviço criado, injetamos ele nos componentes. Por exemplo, para usar o método getAllCursos() no componente cursos, fazemos

```typescript
export class CursosComponent {
  cursosList: Curso[] = [];
  cursoService: CursoService = inject(CursoService);

  constructor(){
    this.cursosList = this.cursoService.getAllCursos();
  }
}
```

Da mesma forma, usaremos o método getCursoById na página details 

```typescript
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cursoService: CursoService = inject(CursoService);

  curso: Curso | undefined;

  constructor() {
      const cursoId = Number(this.route.snapshot.params['id']);
      this.curso = this.cursoService.getCursoById(cursoId);
  }

}
```

Lembre-se de exportar o serviço em cada componente para que ele seja acessível.

### :hammer: Mãos a Obra

Crie um método que solicita as informações pelo nome do curso, ao invés da utilização do ID. 

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>