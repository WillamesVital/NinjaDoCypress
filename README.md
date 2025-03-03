# Chatbot - Consulta de Encomendas

## Estrutura do Projeto

## Descrição

Este projeto é composto por dois aplicativos principais: **WebDojo** e **Chatbot**. O **WebDojo** é um servidor que hospeda a aplicação web, enquanto o **Chatbot** contém testes end-to-end (E2E) para verificar a funcionalidade do chatbot de consulta de encomendas.

### WebDojo

O **WebDojo** é configurado para servir a aplicação web na porta 3000. Ele utiliza o pacote `serve` para hospedar os arquivos estáticos.

#### Scripts

- `dev`: Inicia o servidor na porta 3000.

#### Dependências

- `serve`: ^14.2.4

### Chatbot

O **Chatbot** contém testes E2E escritos em Cypress para validar a funcionalidade do chatbot de consulta de encomendas.

#### Estrutura de Pastas

- `cypress/e2e/`: Contém os testes E2E.
- `cypress/fixtures/`: Contém dados de exemplo para os testes.
- `cypress/support/`: Contém comandos personalizados e configurações globais para os testes.

#### Arquivos Importantes

- [`Chatbot/cypress/e2e/tracking.cy.js`](Chatbot/cypress/e2e/tracking.cy.js ): Contém os testes E2E para a consulta de encomendas no chatbot.
- [`Chatbot/cypress/support/commands.js`](Chatbot/cypress/support/commands.js ): Define comandos personalizados do Cypress.
- [`Chatbot/cypress/support/e2e.js`](Chatbot/cypress/support/e2e.js ): Arquivo de configuração global do Cypress.
- [`Chatbot/cypress.config.js`](Chatbot/cypress.config.js ): Configuração do Cypress.
- [`Chatbot/TestData.md`](Chatbot/TestData.md ): Contém a massa de testes utilizada nos testes de consulta de código de rastreio.

#### Dependências

- `cypress`: ^14.1.0

## Como Executar

### WebDojo

1. Navegue até o diretório [`Apps/WebDojo`](Apps/WebDojo ).
2. Execute o comando `yarn dev` para iniciar o servidor.

### Chatbot

1. Navegue até o diretório [`Chatbot`](Chatbot ).
2. Execute o comando `npx cypress open` para abrir a interface do Cypress.
3. Execute os testes E2E a partir da interface do Cypress.

## Massa de Testes

A massa de testes para a consulta de código de rastreio está documentada no arquivo TestData.md. Este arquivo contém os códigos de rastreio utilizados nos testes e as saídas esperadas para cada código.

## Comandos Personalizados

Os comandos personalizados do Cypress estão definidos no arquivo commands.js. Alguns dos comandos incluem:

- [`abriChatBot`](Chatbot/cypress/e2e/tracking.cy.js ): Abre o chatbot na aplicação.
- [`verificarMessagem`](Chatbot/cypress/e2e/tracking.cy.js ): Verifica se uma mensagem específica está visível no chatbot.
- [`selecionarOpcao`](Chatbot/cypress/e2e/tracking.cy.js ): Seleciona uma opção no chatbot.
- [`enviarMensagem`](Chatbot/cypress/e2e/tracking.cy.js ): Envia uma mensagem no chatbot.

## Configuração do Cypress

A configuração do Cypress está definida no arquivo cypress.config.js. Algumas das configurações incluem:

- [`baseUrl`](Chatbot/cypress.config.js ): http://localhost:3000
- [`viewportWidth`](Chatbot/cypress.config.js ): 1200
- [`viewportHeight`](Chatbot/cypress.config.js ): 800

## Referências

Para mais informações sobre como criar comandos personalizados e configurar o Cypress, consulte a [documentação oficial do Cypress](https://on.cypress.io).