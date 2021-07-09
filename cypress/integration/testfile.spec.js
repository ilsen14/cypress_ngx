/// <reference types ="Cypress" />

describe("testing local host website", () => {
  beforeEach("run website", () => {
    cy.visit("http://localhost:4200/pages");
    cy.intercept("http://localhost:4200/sockjs-node/info?t=1625829581333");
  });


  it("Confirm delete  pop up window", () => {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    cy.get("tbody tr").first().find(".nb-trash").click({ force: true });
    cy.on("window:confirm", () => false);
  })
  })
