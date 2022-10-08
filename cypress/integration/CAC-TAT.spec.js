/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    cy.get("#firstName")
      .should("be.visible")
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get("#lastName")
      .should("be.visible")
      .type("Lima")
      .should("have.value", "Lima");

    cy.get("#email")
      .should("be.visible")
      .type("guibiel-10@hotmail.com")
      .should("have.value", "guibiel-10@hotmail.com");

    cy.get("#phone-checkbox").click();

    cy.get("#phone")
      .should("be.visible")
      .type("11994306108")
      .should("have.length", 1);

    cy.get("#open-text-area")
      .should("be.visible")
      .type(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        {
          delay: 0,
        }
      )
      .should(
        "have.value",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      );

    cy.contains(".button", 'Enviar').should("be.visible").click();

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName")
      .should("be.visible")
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get("#lastName")
      .should("be.visible")
      .type("Lima")
      .should("have.value", "Lima");

    cy.get("#email")
      .should("be.visible")
      .type("putsmanoerreilegal")
      .should("have.value", "putsmanoerreilegal");

    cy.get("#open-text-area")
      .should("be.visible")
      .type(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        {
          delay: 0,
        }
      )
      .should(
        "have.value",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      );

    cy.contains(".button", 'Enviar').should("be.visible").click();

    cy.get(".error").should("be.visible");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName")
      .should("be.visible")
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get("#lastName")
      .should("be.visible")
      .type("Lima")
      .should("have.value", "Lima");

    cy.get("#email")
      .should("be.visible")
      .type("guibiel-10@hotmail.com")
      .should("have.value", "guibiel-10@hotmail.com");

    cy.get("#phone-checkbox").click();

    cy.get("#phone").should("be.visible").type("aaaa");

    cy.get("#open-text-area")
      .should("be.visible")
      .type(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        {
          delay: 0,
        }
      )
      .should(
        "have.value",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      );

    cy.contains(".button", 'Enviar').should("be.visible").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .should("be.visible")
      .type("Guilherme")
      .should("have.value", "Guilherme");

    cy.get("#firstName").clear().should("have.value", "");

    cy.get("#lastName")
      .should("be.visible")
      .type("Lima")
      .should("have.value", "Lima");

    cy.get("#lastName").clear().should("have.value", "");

    cy.get("#email")
      .should("be.visible")
      .type("guibiel-10@hotmail.com")
      .should("have.value", "guibiel-10@hotmail.com");

    cy.get("#email").clear().should("have.value", "");

    cy.get("#phone-checkbox").click();

    cy.get("#phone")
      .should("be.visible")
      .type("11994306108")
      .should("have.value", "11994306108")
      .should("have.length", 1);

    cy.get("#phone").clear().should("have.value", "");

    cy.get("#open-text-area")
      .should("be.visible")
      .type(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        {
          delay: 0,
        }
      )
      .should(
        "have.value",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      );

    cy.get("#open-text-area").clear().should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.contains(".button", 'Enviar').should("be.visible").click();

    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
  });
});