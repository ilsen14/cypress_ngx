/// <reference types="cypress" />

class ToasterPage {
  static verifyToasterColorAndText() {
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();
    cy.wait(100)
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    cy.get(".position-select").then((dropDown) => {
      cy.wrap(dropDown).click({ force: true });
      cy.get(".options-list").each((listItem, index) => {
        const itemText = listItem.text();
        const elements = [
          "bottom-end",
          "bottom-start",
          "bottom-right",
          "bottom-left",
          "top-right",
          "top-start",
          "top-left",
          "top-end",
        ];

        cy.wrap(listItem).click();
        if (index < 7) {
          cy.wrap(dropDown).click({ force: true });
        }
      });
    });
    cy.get('input[name="title"]').clear({ force: true }).type("Ivan Kypal");
    cy.get('input[name="content"]').clear({ force: true }).type("Klint Istvyd");
    cy.get('input[type="number"]').clear({ force: true }).type("199999");
    cy.get("nb-card-footer").find("button").first().click({ force: true });
    cy.get("nb-toast").should(
      "have.css",
      "background-color",
      "rgb(51, 102, 255)"
    );
    cy.get("nb-toast").should("contain", "Klint");
  }
}

export default ToasterPage;
