<div align="center">
<img src="src/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade I (HTML/CSS) - Prática 6

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Linguagem&message=HTML|CSS&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Finalizando a primeira unidade do nosso curso, adicionaremos responsividade a nossa aplicação. Primeiro, para isso, adicionamos a seguinte <em>tag</em> no nosso <em>template</em>. Explicamos o porque no material de leitura.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Usando <em>Media Query</em>, adicionamos diferentes estilos para diferentes tamanhos de tela: quando menor que 480px e quando for entre 480px e 900px.

```css
/* Media query para dispositivos com largura de tela menor que 480px */
@media only screen and (max-width: 479px) {
    #content {
        margin: 10 20;
    }

    header img {
        width: 90%;
    }

    #description {
        flex-wrap: wrap-reverse;
    }

    .card_curso {
        width: 300px;
        margin-top: 100px;
    }

    .image_card {
        width: 300px;
    }

    .card_img {
        width: 300px;
    }

}
```

```css
/* Media query para dispositivos com largura de tela entre 480px e 900px */
@media only screen and (min-width: 480px) and (max-width: 900px) {
    #content {
        margin: 10 20;
    }

    header img {
        width: 90%;
    }

    #description {
        flex-wrap: wrap-reverse;
    }
}
```

Um outro ponto relacionado a responsividade é a mudança de comportamento do layout flexbox, usando a propriedade <code>flex-wrap:wrap-reverse</code>. Quando a tela muda de tamanho, o preenchimento do layout altera, colocando a figura do card-principal depois do texto.

![Estrutura com tela maior 900px](src/images/image.png)

Mudança da estrutura depois da mudança de tela.

![Estrutura com tela menor 900px](src/images/image-1.png)

### :hammer: Mãos a Obra

Altere o comportamento da responsividade da aplicação. Adicione padrões de responsividade também para o formulário. Realize testes usando o <em> Dev Tools</em> do navegador.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>