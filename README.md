<div align="center">
<img src="src/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade III (Javascript) - Prática 2

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Linguagem&message=HTML|CSS|Javascript&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática vamos utilizar o Javascript para adicionar cards de forma dinâmica. Este exemplo é útil para entendermos a importância da utilização de frameworks como o Angular, que facilitam e gerenciam a interação com o <em>template</em>.

Uma das formas de receber dados do servidor é por meio de um arquivo JSON. Basicamente, um arquivo como esse estrutura os dados a partir de uma formatação chave:valor. No nosso exemplo, vamos usar um <code>array</code> que, em uma aplicação real, receberia as informações dos cursos do servidor.

```javascript
var cursos = [
    {
        "titulo": "Full-Stack",
        "descricao": "Construa o futuro da web! Aprenda a desenvolver aplicações completas, desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!"
    },
    {
        "titulo": "Ciência de Dados",
        "descricao": "Desvende os segredos dos dados! Aprenda a extrair insights valiosos, desenvolver modelos preditivos e             impulsionar decisões inteligentes com nossa trilha de Ciência de Dados."
    },
    {
        "titulo": "Front-end e UX/UI",
        "descricao": "Dê vida às suas ideias! Domine as técnicas de design de interface e desenvolvimento front-end para criar experiências digitais incríveis. Explore nossa trilha Front-end e UX/UI agora!"
    }

];
```
Agora, precisamos montar a estrutura do card diretamente no código. Para isso, vamos criar um função chamada <em>createCard</em> que recebe os dados de um único curso e cria a estrutura do card.

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