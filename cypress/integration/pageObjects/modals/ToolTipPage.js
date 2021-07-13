/// <reference types="cypress" />

class ToolTipPage {
  static verifyToolTipText() {
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    cy.contains("nb-card", "Tooltip With Icon").then((iconTip) => {
      cy.wrap(iconTip).find("button").first().click({ force: true });
      cy.get("nb-tooltip")
        .should("have.class", "top ng-trigger")
        .and("contain", "This is a tooltip");
      cy.wrap(iconTip).find("button").eq(1).click({ force: true });
      cy.get("nb-tooltip").should(
        "have.css",
        "background-color",
        "rgb(255, 61, 113)"
      );
    });
  }

  static verifyToolTipsClickable() {
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });
    cy.contains("nb-card", "Colored Tooltips").then((colorTips) => {
      cy.wrap(colorTips)
        .find("button")
        .each((button) => {
          cy.wrap(button).click({ timeout: 10000 });
        });
    });
  }

  static verifyToolTipColor() {}
}

export default ToolTipPage;
