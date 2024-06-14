<div align="center">
<img src="src/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade I (HTML/CSS) - Prática 5

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Linguagem&message=HTML|CSS&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática, melhoramos o visual da nossa aplicação. Lembrando que em uma situação real, o desenvolvedor <em>frontend</em> receberia o projeto dos <em>designers</em> para serem implementados. Aqui estamos apenas ajustando para fins de aprendizagem.

Para entender as alterações, estude o código html e css, e veja quais foram os estilos aplicados nas diferentes partes do <em>template</em>.

Um ponto importante dessa versão é a utilização do layout Flexbox. Para exemplificar, vamos analisar a parte que lista os cursos em formato de cards. Temos uma div principal chamada cards, com os cards de cada curso com da classe 'card_curso'.

```html
<div class="card_curso">
<a href="#" class='card-link'></a>
<div class="card_img">
    <img src="src/images/card-fullstack.png" width="400px" />
</div>
<div class="card_texto">
    <p class="titulo">Full-Stack</p>
    <p class="card_descricao">Construa o futuro da web! Aprenda a desenvolver aplicações completas,
    desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!</p>
</div>
</div>
```
A parte do <em>css</em> que especifica o layout e estrutura os cards é mostrado a seguir.

```css
#cursos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card_curso {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 400px;
    border: 1px solid;
    border-radius: 0 0 15px 15px;
    margin-top: 10;
    position: relative;
}
```

Neste caso, vamos analisar apenas a relação entre <b>#cursos</b> e <b>.card_curso</b>. Usamos a propriedade <code>display:flex</code> no elemento pai (cursos) e indicamos a direção em linha (<em>flex-direction: row</em>), a forma como deve ser preenchido (<em>flex-wrap</em>) e o alinhamento dos componentes filhos (<em>space-around</em>).

Por fim, usamos os seletores <em>:hover</em> e <em>:focus</em> para configurar comportamentos de quando o usuário colocar o mouse em cima de um componente e quando este está com o foco nele, respectivamente. Basicamente, adicionamos o mesmo comportamento, que consiste em aumentar a largura da linha para 3px e usar a cor <em>blueviolet</em>.

```css
:focus {
    border: 3px solid blueviolet;

}

:hover {
    border: 3px solid blueviolet;

}
```

### :hammer: Mãos a Obra

Faça alterações de conteúdo e estilo. Adicione um novo curso entre os listados. Altere os estilos da classe 'linha_formulário'. Por fim, verifique o comportamento da aplicação quando o tamanho da tela é alterado. 

Para isso, use o comando <code>Ctrl+Shift+i</code> ou <code> F12 </code> para abir o <em> Dev Tools</em> do navegador. Depois, procure o <em>Toggle Device Toolbar</em> e altera os tamanhos de tela. Implementaremos responsividade na próxima prática.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>