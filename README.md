<div align="center">
<img src="src/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade IV (HTTP)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=API_REST|HTTP|JSON&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática vamos realizar testes de requisições HTTP. Para isso, como ainda não temos uma api rodando, vamos usar o <em>'json-server'</em>. Essa biblioteca cria uma API fake que recebe requisições HTTP baseado em um arquivo JSON.

### :hammer: Instalação das Ferramentas

1. <em>json-server</em>
   
   Para instalar o <em>json-server</em> basta usar o comando

    
```shell
    npm install -g json-server
```

2. Extensão REST Client

    Para fazer as requisições, podemos usar a extensão <b>REST Client</b> do <b>vsCode</b>. Para fazer instalação, basta fazer a instalação da extensão.

    ![REST Client](image.png)

### :hammer: Utilização

```javascript
function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card_curso_perfil');

    const card_perfil = document.createElement('div');
    card_perfil.classList.add('card_texto_perfil');
    
    const titulo = document.createElement('p');
    titulo.textContent = data.titulo;
    titulo.classList.add('titulo');

    const descricao = document.createElement('p');
    descricao.textContent = data.descricao;
    descricao.classList.add('card_descricao');

    card_perfil.appendChild(titulo);
    card_perfil.appendChild(descricao);
    card.appendChild(card_perfil);

    return card;
}
```
Perceba que a estrutura do card que foi criada é a mesma que já existia no código html, a diferença é uqe precisamos criar cada elemento no código, com os mesmos nomes de id, classes e tags. A idéia é criar elementos pai e adicionar os elementos filhos a ele. Por exemplo, título e descrição são adicionados ao elemento (div) <em>card_perfil</em>. O retorno da função é o card criado.

Agora, podemos usar essa função para inserir os cards dinamicamente baseado no <code>array</code> cursos. Para isso, usamos um ouvinte (listener) no objeto <em>document</em> que verifica se o conteúdo da página já foi carregado. Por fim, usamos o método forEach para iterar pelo array cursos e chamar a função <em>createCard</em> para cada curso.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const cursosContainer = document.getElementById('cursos_perfil');

    cursos.forEach(item =>{
        const card = createCard(item);
        cursosContainer.appendChild(card)
    })
})
```

### :hammer: Mãos a Obra

Altere a estrutura do card, adicionando alguma nova informação, como por exemplo, carga horária do curso. Lembre de adicionar essa informação aos dados cursos. Além disso, adicione novos cursos aos <em>array cursos</em> e veja que ao recarregar a página os dados são inseridos de forma dinâmica na página. 

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>