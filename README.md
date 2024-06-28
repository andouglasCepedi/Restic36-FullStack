# Restic36-FullStack
<div align="center">
<img src="CursosRestic\src\assets\images\logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade V (Angular) - Prática 7

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=HTML|CSS|TYPESCRIPT|HTTP|JSON|ANGULAR&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Chemaos na última prática da unidade V. Para deixar a nossa aplicação um pouco mais próxima de uma aplicação real, vamos utilizar o protocolo HTTP e json-server para simular requisições a uma API. Utilizaremos a mesma estrutura do <em>db.json</em> que usamos na prática de HTTP.

Em <em>curso.service.ts</em> retiramos os dados estáticos, já que agora receberemos esses dados do servidor fictício. Criamos uma variável url que recebe o endpoint gerado pelo json-server. A partir daí, fazemos alterações nos métodos getAllCursos e getCursoById. Como estaremos realizado uma chamada externa, utilizaremos uma função assíncrona chamada <em>fetch</em> que faz a chamada ao servidor. Além disso, utilizaremos <em>Promise</em> para manipular os estados e, conquentemente, os dados que seriam enviados pelo servidor.

O arquivo <em>curso.service.ts</em> ficou da seguinte forma

```typescript
export class CursoService {

  url = 'http://localhost:3000/cursos';

  constructor() {}

  async getAllCursos(): Promise<Curso[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  };

  async getCursoById(id: Number): Promise<Curso | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? {};
  }

  submitInscricao(name: string, email: string, phone: string ){
    console.log(name, email, phone);
  }
  
}
```
Note a utilização do <em>async</em> e <em>await</em> para gerenciamento de funções assíncronas. Perceba também que o retorno dos métodos estão no formato 'json'.

Para testar, lembre-se que inicialmente é necessário rodar o json-server, passando como parâmetro o <em>db.json</em>.

### :hammer: Mãos a Obra

Crie outras chamadas à API. Além disso, verifique que não fizemos nenhum tipo de tratamento de erro. Adicione essas tratativas, tratando possíveis problemas que possam acontecer na requição, apresentando uma mensagem de erro na tela.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>