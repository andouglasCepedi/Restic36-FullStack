<div align="center">
<img src="src/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade IV (HTTP)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=API_REST|HTTP|JSON&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática vamos realizar testes de requisições HTTP. Para isso, como ainda não temos uma api rodando, vamos usar o <em>'json-server'</em>. Essa biblioteca cria uma API fake que recebe requisições HTTP baseado em um arquivo JSON.

### :wrench: Instalação das Ferramentas

1. <em>json-server</em>
   
   Para instalar o <em>json-server</em> basta usar o comando

    
```shell
    npm install -g json-server
```

2. Extensão REST Client

    Para fazer as requisições, podemos usar a extensão <b>REST Client</b> do <b>vsCode</b>. Para fazer instalação, basta fazer a instalação da extensão.

    ![REST Client](image.png)

### :page_facing_up: Utilização

Uma vez instalado o <em>json-server</em>, podemos criar um banco de dados fictício em um arquivo json (db.json) como mostrado a seguir.

```json
{
  "cursos": [
    {
      "id": "1",
      "name": "Full-Stack",
      "description": "Construa o futuro da web! Aprenda a desenvolver aplicações completas, desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!",
      "image": "../../../assets/images/card-fullstack.png",
      "professor": [
        "Andouglas",
        "Thiago"
      ],
      "cargaHoraria": 300,
      "items": [
        "Desenvolver Aplicação web completa.",
        "Angular para o front-end.",
        ".NET para o back-end.",
        "Github e Docker",
        "Projeto e implementação de banco de dados com ORM",
        "Deploy e manutenção"
      ]
    },
    {
      "id": "2",
      "name": "Ciência de Dados",
      "description": "Desvende os segredos dos dados! Aprenda a extrair insights valiosos, desenvolver modelos preditivos e impulsionar decisões inteligentes com nossa trilha de Ciência de Dados.",
      "image": "../../../assets/images/card-dados.png",
      "professor": [
        "Ciro",
        "Aluisio"
      ],
      "cargaHoraria": 250,
      "items": []
    },
    {
      "id": "3",
      "name": "Front-end e UX/UI",
      "description": "Dê vida às suas ideias! Domine as técnicas de design de interface e desenvolvimento front-end para criar experiências digitais incríveis. Explore nossa trilha Front-end e UX/UI agora!",
      "image": "../../../assets/images/card-frontend.png",
      "professor": [
        "João",
        "Paulo"
      ],
      "cargaHoraria": 280,
      "items": []
    }
  ]
}
```
Basicamente, temos uma estrutura de dados muito parecida com os dados que usamos na aula de Javascript. Agora, podemos rodar o servidor com o seguinte comando (executado na pasta onde está o arquivo <em>db.json</em>)

```shell
    json-server db.json
```

A saída deste comando indica que o servidor foi iniciado na porta 3000. Além disso, apresenta o caminho principal da aplicação (index) os enpoints (que no caso é apenas cursos, já que é baseado no db.json) e o diretório dos arquivos estáticos.

```shell
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching db.json...

♡( ◡‿◡ )

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/cursos

```

Agora podemos fazer requisições HTTP a esse servidor usando a extensão REST Client. Para isso, criamos uma arquivo com extesão <b>.http</b> ou <b>.rest</b>.
Vamos a um exemplo da utilização dessa extensão. 

```shell
GET http://localhost:3000/cursos HTTP/1.1
Content-Type: application/json
```
Automaticamente, um botão <em>"send request"</em> aparece acima da requisição e o retorno é apresentado em uma aba.

```json
HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
content-type: application/json
Date: Fri, 21 Jun 2024 21:44:40 GMT
Connection: close
Content-Length: 1459

[
  {
    "id": "1",
    "name": "Full-Stack",
    "description": "Construa o futuro da web! Aprenda a desenvolver aplicações completas, desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!",
    "image": "../../../assets/images/card-fullstack.png",
    "professor": [
      "Andouglas",
      "Thiago"
    ],
    "cargaHoraria": 300,
    "items": [
      "Desenvolver Aplicação web completa.",
      "Angular para o front-end.",
      ".NET para o back-end.",
      "Github e Docker",
      "Projeto e implementação de banco de dados com ORM",
      "Deploy e manutenção"
    ]
  },
  {
    "id": "2",
    "name": "Ciência de Dados",
    "description": "Desvende os segredos dos dados! Aprenda a extrair insights valiosos, desenvolver modelos preditivos e impulsionar decisões inteligentes com nossa trilha de Ciência de Dados.",
    "image": "../../../assets/images/card-dados.png",
    "professor": [
      "Ciro",
      "Aluisio"
    ],
    "cargaHoraria": 250,
    "items": []
  },
  {
    "id": "3",
    "name": "Front-end e UX/UI",
    "description": "Dê vida às suas ideias! Domine as técnicas de design de interface e desenvolvimento front-end para criar experiências digitais incríveis. Explore nossa trilha Front-end e UX/UI agora!",
    "image": "../../../assets/images/card-frontend.png",
    "professor": [
      "João",
      "Paulo"
    ],
    "cargaHoraria": 280,
    "items": []
  }
]
```
Para outros exemplos, abra o arquivo <em>pratica_http.http</em>. 

### :hammer: Mãos a Obra

Crie outros objetos dentro do arquivo json e faça requisições para a nova endpoint gerada pelo json-server.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>