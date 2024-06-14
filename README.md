<div align="center">
<img src="src/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade I (HTML/CSS) - Prática 4

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Linguagem&message=HTML|CSS&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática, começamos a adicionar estilo na aplicação que começamos no início da unidade. Nossa aplicação é divida em três parter principais: <code> topo, content e footer </code>. 

1. <u>Topo</u>

Usamos a tag <code> header </code> como topo da nossa aplicação. Dentro dele temos apenas uma imagem (logo da residência) e uma tag <code> h3 </code> para o nome. No topo da página queremos, por enquanto, apenas centralizar os elementos. Usamos a propriedade do CSS <em>text-align</em> para obter essa característica.

```css
header{
    text-align: center;
}
```
2. <u>Content</u>

No conteúdo da nossa página, temos uma descrição. Por enquanto, alteramos apenas algumas propriedades de cor de fundo, borda, alinhamento e organização dos componentes. 

```css
#description{
    border: 1px solid;
    border-radius: 15px;
    margin: 0px 10px 0px 10px; 
    padding: 10px;
    text-align: justify;
    background-color: rgb(180, 193, 206);

}
```
Vamos analisar cada uma dessas propriedades. 

- <em>border</em> - Adiciona uma borda/linha sólida (contínua) ao componente com largura de 1px. Poderíamos ter adicionado a cor logo depois da palavra  <em> solid </em>. Como não adicionamos, por padrão, ele atribui a cor preta.
- <em>border-radius</em> - Arredonda todos os cantos em um valor de 15px. Como apenas um valor foi passado, todas os cantos são alterados. 
- <em>margin</em> - Atribui distâncias de margem (relativo ao elemento pai) na ordem top-right-bottom-left.
- <em>padding</em> - Atribui distância interna (relativo aos elementos filho) de 10px em todas as direções.
- <em>text-allign</em> - Alinha o texto de forma justificada.
- <em>background-color</em> - Atribui uma cor de fundo para o componente.

Além disso, também adicionamos estilo na tabela de cursos.

```css
table{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: x-small;
}

table caption{
    text-align: left;
}

table thead{
    background-color: blueviolet;
    color: white;
}

table .par{
    background-color: rgb(205, 191, 218);
}

tbody td{
    padding: 4px;
    text-align: center;
}
```
Neste caso, como propriedades diferentes do exemplo anterior temos o <code>font-family</code> que define a fonte do texto, <code>font-size</code> que define o tamanho da fonte e o <code>color</code> que define a cor do texto.

Com relação ao formulário, usamos as seguintes propriedades

```css
#formulario{
    background-color: white;
    border-radius: 15px;
    border: 1px solid blueviolet;
    padding: 10;
    text-align: center;
}

#formulario p{
    text-align: center;
    font-weight: bolder;
}

.linha_formulario{
    padding: 5;
    text-align: center;

}

input, select, textarea{
    border-radius: 3px;
    border-color: rgb(141, 42, 234);
    color: blueviolet;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: x-small;
}
```

3.<u>Footer</u>

Por fim, o último componente da página é o rodapé, que foi estilizado com as seguintes propriedades

```css
#footer{
    border-top:1px solid blueviolet;
    background-color: white;
    margin: 20px 0px 0px 0px;
    text-align: center;
    padding: 1px;
}
```


### :hammer: Mãos a Obra

Faça alterações de estilo nos elementos do <em>html</em>. Explore novas propriedades tentando entender como os estilos são aplicados, respeitando a ordem de prioridade.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>