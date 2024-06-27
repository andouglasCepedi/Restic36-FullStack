# Restic36-FullStack<div align="center">
<img src="CursosRestic\src\assets\images\logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade V (Angular) - Prática 6

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=HTML|CSS|TYPESCRIPT|ANGULAR&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Depois de introduzido um serviço na nossa aplicação, nesta prática, vamos aprender como criar um formulário simples. Neste exemplo, usamos um formulário reativo.

Para se entende melhor, formulários reativos em Angular são uma abordagem alternativa para a criação de formulários, onde a lógica é definida programaticamente no TypeScript usando classes como <em>FormControl</em>, <em>FormGroup</em> e <em>FormBuilder</em>. Essa abordagem é mais adequada para formulários mais complexos e flexíveis, onde é necessário um controle mais granular sobre o estado do formulário e da validação.

No template (html) usamos 3 inputs: nome, email e telefone. 
```html
<section class="forms">
    <h4 class="titulo">Inscreva-se</h4>
    <form [formGroup]="applyForm" class="form" (submit)="submitInscricao()">
        <label for="name">Nome</label>
        <input id="name" type="text" formControlName="name">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">

        <label for="phone">Telefone</label>
        <input id="phone" type="tel" formControlName="phone">

        <button type="submit" class="primary">Enviar</button>
    </form>
    
</section>
```

Perceba que utilizamos uma diretiva chamada <em>formGroup</em> para indicar a variável do nosso formulário reativo. No arquivo <em>details.component.ts</em> observe o seguinte trecho de código

```typescript
applyForm = new FormGroup(
  {
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  }
);
```
As variáveis <em>name, email e phone</em> são usadas para armazenar os dados inseridos no formulário. Além disso, perceba que no template usamos <code>(submit)="submitInscricao()"</code> para indicar o que deve ser feito quando o botão de envio for pressionado. Neste caso, o método que deve ser chamado é o <em>sumitInscricao</em>. Esse método está inserido no serviço que criamos anteriormente e que no nosso caso, apenas mostramos os dados digitados no console. 

```typescript
submitInscricao(name: string, email: string, phone: string ){
  console.log(name, email, phone);
}
```

Por fim, perceba que esse método é chamado diretamente no arquivo <em>details.componente.ts</em> que possui um método com o mesmo nome e utiliza o <em>applyForm</em> para pegar o valor que foi inserido pelo usário no formulário. 

```typescript
submitInscricao(){
    this.cursoService.submitInscricao(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.phone ?? '',
    )
  };
```
Não esqueça de importar os módulos no <em>details.component.ts</em> e adicionar o <em> ReactiveFormsModule </em> no "imports" do componente.

```typescript
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
```
### :hammer: Mãos a Obra

Adicione novos campos ao formulário, de diferentes tipos. Mostre no console todos os dados inseridos pelo usuário.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>