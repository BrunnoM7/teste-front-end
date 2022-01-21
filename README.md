# Cardápio online

O projeto foi iniciado utilizando o boilerplate `create-react-app` porém nem todos pacotes disponibilizados foram utilizados, dessa forma alguns desses foram removidos entre esses os destinados a testes e monitoramento.

## Para rodar o projeto

No diretório do projeto:

### `npm start`

Roda ele localmente no endereço [http://localhost:3000](http://localhost:3000).

### `npm run build`

Opção de build para deploy.

## Sobre a estrutura

Pensando na escalabilidade e pegando alguma inspiração dos conceitos de `Atomic Design`, a estrutura de pastas do projeto foi feita pensando em separar responsabilidades, pensando `components` como pequenas unidades que são utilizadas para montar as páginas do projeto, separadas em `pages`.

Para além disso, as folhas de estilo foram separadas em `styles` e organizadas em arquivos semanticamente nomeados para facilitar a manutenção e implementação de novos estilos. Os valores básicos utilizados ao longo da folha de estilos foram extraídos em variáveis no arquivo `variables.css`.

O controle de estados e comunicação com a API, foi feito utilizando a `ContextAPI` do React e com a criação de um `api service` local utilizando `axios`.

## Melhorias e alterações para próximas atualizações

Já pensando na implementação de novas funcionalidades e interações com a API, os tipos utilizados pela ContextAPI já foram todos definidos no arquivo `types.js` estando todos comentados, excessão a `GET_MENU` que está funcional no momento.

Outro placeholder que o projeto possui é a página de edição de items do cardápio. A ideia é que com essa página e suas funcionalidades finalizadas seja possível controlar completamente os items do cardápio. Bem como a adição de novas categorias para esses items povoar (levando em consideração a estrutura de dado fornecida pela API).

Outras melhorias que colocaria no pipeline e desenvolvimento dessa aplicação:

- finalização de form de adição e edição (mencionada)
- implementação de lazy loading no carregamento do menu para assegurar uma melhor experiência do usuário.
- Criação de modal para exibição de mais detalhes sobre um item selecionado
- Campo de busca para facilitar a filtragem dos items
