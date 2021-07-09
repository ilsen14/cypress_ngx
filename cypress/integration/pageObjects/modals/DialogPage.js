/// <reference types="cypress" />

class DialogPage {
  static checkDismissButton() {
    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.wait(100)
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    cy.contains("nb-card", "Open Dialog")
      .find("nb-card-body")
      .then((tableBody) => {
        cy.wrap(tableBody).find(".appearance-filled").first().click();
        cy.get("nb-dialog-container")
          .find("nb-card-header")
          .should("contain", "This is a title passed to the dialog component");
        cy.get("nb-dialog-container")
          .find("button")
          .should("contain", "Dismiss Dialog")
          .click();
      });
  }

  static checkDismissDialog() {

    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.wait(100)
    cy.get("ngx-header").then((header) => {
        cy.wrap(header).find("nb-icon").first().click({ force: true });
      });
    cy.contains("nb-card", "Open Without Backdrop Click")
      .find("nb-card-body")
      .then((backDropBody) => {
        cy.wrap(backDropBody).find(".appearance-filled").first().click();
      });
    cy.get("nb-dialog-container")
      .find("nb-card-header")
      .should("contain", "This is a title passed to the dialog component");
    cy.get("nb-dialog-container")
      .find("button")
      .should("contain", "Dismiss Dialog")
      .click();
  }
}

export default DialogPage;
