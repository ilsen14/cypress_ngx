/// <reference types="cypress" />

class HomePage {
  static testColorScheme() {
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    cy.get("nav nb-select").then((dropDown) => {
      cy.wrap(dropDown).click();
      cy.get(".options-list nb-option").each((listItem, index) => {
        const itemText = listItem.text().trim();

        const color = {
          Light: "rgb(255, 255, 255)",
          Dark: "rgb(34, 43, 69)",
          Cosmic: "rgb(50, 50, 89)",
          Corporate: "rgb(255, 255, 255)",
        };

        cy.wrap(listItem).click();
        cy.wrap(dropDown).should("contain", itemText);
        cy.get("nb-layout-header nav").should(
          "have.css",
          "background-color",
          color[itemText]
        );
        if (index < 3) {
          cy.wrap(dropDown).click();
        }
      });
    });
  }
}

export default HomePage;
