<div align="center">
<img src="CursosRestic/src/assets/images/logo-nav.png" width="400px">
</div>

---

## Trilha FullStack- Unidade V (Angular) - Prática 2

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Tecnologias&message=HTML|CSS|TYPESCRIPT|ANGULAR&color=GREEN&style=for-the-badge)

### :bookmark_tabs: Descrição

Nesta prática, iniciamos a estruturação da nossa aplicação. Para isso, criamos dois componentes (<em>header</em> e <em>painel</em>) baseado nas telas que criamos nas unidades I e III do nosso curso.

Para criar um componente usando o cli do Angular basta usar o seguinte código
  
```shell
ng generate component nome_do_componente
```
Ao rodar o comando acima, 4 arquivos são gerados: um html para o template, um css para o estilo, um typescript para a lógica do componente e um spec.ts para teste do componente. O arquivo typescript do componente terá a seguinte estrutura

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```
- o <b>selector</b> corresponde ao nome daquele componente para ser usado no html; 
- o <b>standalone</b> consiste em uma flag usada para indicar que o componente não possui dependências externas significativas e pode ser usado independente em diferentes partes de um aplicativo ou até mesmo em aplicativos diferentes;
- em <b>imports</b> devem ser inseridos os componentes, serviços, diretivas, etc, que serão usadas pelo componente; 
- por fim, os campos <b>templateUrl</b> e <b>tyleUrl</b> indicam os arquivos de template e de estilo, respectivamente.

### :hammer: Mãos a Obra

Nas aulas assíncronas (vídeos), criamos um novo componente que recebe cards de cursos cadastrados. Tente reproduzir esses componentes. Adicione também um novo componente footer, para o rodapé da página.

<b>Obs.:</b> Na próxima branch você encontra os novos componentes.

### :triangular_flag_on_post: Licença
<p>
Todos os direitos reservados para Restic36 (Residência em Software: Bahia + Tecnologia + Empreendedorismo)
</p>