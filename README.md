<div align="center">
<img src="CursosRestic/src/assets/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade V (Angular) - Prática 4

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=HTML|CSS|TYPESCRIPT|ANGULAR&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática, usamos o roteamento para criar a página de detalhes que será acessada quando um curso for escolhido. Para isso, criamos dois componentes dentro da pasta "pages": um chamado <b>home</b> e outro <b>details</b>. A criação dentro dessa pasta é apenas a nível de organização, para deixar separado dos outros componentes.

Uma coisa importante é entender que a página não é recarregada. O roteamento é realizado inserindo componentes em um local especificado da página. No nosso exemplo, criamos uma seção <em>content</em> que receberá os componentes do roteamento, enquanto que os componentes <em>header</em> e <em>footer</em> aparecerção em todas as páginas. Isso pode ser visto no arquivo <em>app.component.html</em>.

```html
<div id="layout">
  <section class="header">
    <app-header></app-header>
  </section>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  <section class="footer">
    <app-footer></app-footer>
  </section>
</div>
```
O roteamento entre os componentes é feito no arquivo <em>app.routes.ts</em> da seguinte forma

```typescript
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detalhes do Curso'
    }
];
```
Usamos as propriedades <em>path</em> e <em>component</em> para especificar o 'endpoint' que acessa aquela página e o componente que será chamado, respectivamente. Perceba que usamos um parâmetro de rota em detalhes. Esse id corresponde ao curso escolhido pelo usuário, para que os dados possam ser mostrados na página de detalhes.

Para que esse id seja recebido na página de detalhes, usamos o seguinte código no arquivo <em>details.component.ts</em>

```typescript
route: ActivatedRoute = inject(ActivatedRoute);
cursoId = 0;

constructor() {
    this.cursoId = Number(this.route.snapshot.params['id']);
}
```
A variável <em>route</em> recebe a rota ativada por meio de um <em>@inject</em>. Desta forma, usamos <em>"snapshot.params"</em> para receber o id do curso selecionado. Esse id é passado para o roteamento a partir de uma diretiva <em>routerLink</em> inserida diretamente no componente curso (card).

```html
<a [routerLink]="['/details', cursoData.id]">Saiba mais +</a>
```
### :hammer: Mãos a Obra

Rode o projeto e verifique se o roteamento está funcionando. Tente criar outras páginas e inseri-las no roteamento.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>