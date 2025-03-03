describe("Consulta de Encomenda no Chat", () => {

  const cenarios = [
    {teste: 'Deve indicar que a encomenda já foi entregue', codigoDeRastreio: "PD123456785BR", menssagemFinal: "Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!"},
    {teste: 'Deve indicar que a encomenda está a caminho',codigoDeRastreio: "BR987654321BR", menssagemFinal: "A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis."},
    {teste: 'Deve indicar que a encomenda está em rota de entrega',codigoDeRastreio: "QW112233445BR", menssagemFinal: "Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦"}
  ]

  cenarios.forEach(function (cenario) {
    it(cenario.teste, () => {
  
      cy.abriChatBot();
  
      cy.verificarMessagem(
        "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
      );
  
      cy.selecionarOpcao("Sim, por favor!");
  
      cy.verificarMessagem(
        "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
      );
  
      cy.enviarMensagem(cenario.codigoDeRastreio);
  
      cy.verificarMessagem(
        `Confirmando: você informou o código de rastreio ${cenario.codigoDeRastreio}. Está tudo certo?`
      );
  
      cy.selecionarOpcao("Sim, está certo!");
  
      cy.verificarMessagem(
        "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
      );
  
      cy.verificarMessagem(cenario.menssagemFinal,7000);
    });
  })

  it("Deve exibir erro para o código de rastreio inválido", () => {
    const codigoDeRastreio = "AB123456789XY";

    cy.abriChatBot();

    cy.verificarMessagem(
      "Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?"
    );

    cy.selecionarOpcao("Sim, por favor!");

    cy.verificarMessagem(
      "Ótimo! Por favor, digite o código de rastreio da sua encomenda:"
    );

    cy.enviarMensagem(codigoDeRastreio);

    cy.verificarMessagem(
      `Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`
    );

    cy.selecionarOpcao("Sim, está certo!");

    cy.verificarMessagem(
      "Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍"
    );

    cy.verificarMessagem(
      "Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?",
      7000
    );

    cy.selecionarOpcao("Encerrar atendimento");

    cy.verificarMessagem(
      "Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar."
    );
  });
  
});

Cypress.Commands.add("abriChatBot", () => {
  cy.viewport("iphone-xr");
  cy.visit("/");

  cy.get('button[aria-label="Open Chat"]').should("be.visible").click();

  cy.get(".rcb-chat-header span")
    .should("be.visible")
    .and("have.text", "Sensei");
});

Cypress.Commands.add("verificarMessagem", (mensagemEsperada, timeout = 4000) => {
  cy.contains(".rcb-bot-message", mensagemEsperada, { timeout: timeout }).should(
    "be.visible"
  );
});

Cypress.Commands.add("selecionarOpcao", (opcao) => {
  cy.contains(".rcb-options", opcao)
    .click();
});

Cypress.Commands.add("enviarMensagem", (mensagem) => {
  cy.get(".rcb-chat-input-textarea")
    .type(mensagem);

  cy.get(".rcb-send-button")
    .click();
});
