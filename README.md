<div align="center">
<img src="CursosRestic/src/assets/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade V (Angular) - Prática 3

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=HTML|CSS|TYPESCRIPT|ANGULAR&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática, criamos uma interface para estruturar os dados dos cursos na aplicação. Além disso, usamos diretivas para listar os cursos "armazenados" em um array chamado "cursos". Vamos identificar o que foi feito!

O arquivo <em>cursos.component.html</em> tem o seguinte código

```shell
<p class="titulo">Conheça nossos cursos.</p>
<section id="cursos">
  <app-curso *ngFor="let curso of cursosList" [cursoData]="curso"></app-curso>
</section>
```
Neste caso usamos a diretiva ngFor para iterar na lista de cursos que foi declara no arquivo <em>cursos.component.ts</em>

```typescript
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
```
Lembre-se que "cursosList" é um array do tipo curso, que é a interface que foi criada para fazer a estrutura do dado.

```typescript
  export interface Curso {
    id: number,
    name: string,
    description: string,
    image: string,
    professor: string[],
}
```

### :hammer: Mãos a Obra

Faça alterações no card! Adicione outras informações de cursos e visualize essas novas informações no card.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>