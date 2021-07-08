/// <reference types="cypress" />

class HomePage {
  static checkHomePageThemes() {
    cy.get("nav nb-select").click();
    cy.get(".options-list").contains("Dark").click();
    cy.get("nav nb-select").should("contain", "Dark");
    cy.get("nb-layout-header nav").should(
      "have.css",
      "background-color",
      "rgb(34, 43, 69)"
    );

    cy.get("nav nb-select").then((dropDown) => {
      cy.wrap(dropDown).click();

      cy.get(".options-list nb-option").each((listItem, index) => {
        const itemText = listItem.text().trim();

        const colorTheme = {
          Light: "rgb(255, 255, 255)",
          Dark: "rgb(34, 43, 69)",
          Corporate: "rgb(255, 255, 255)",
          Cosmic: "rgb(50, 50, 89)",
        };
        cy.wrap(listItem).click();
        cy.wrap(dropDown).should("contain", itemText);
        cy.get("nb-layout-header nav").should(
          "have.css",
          "background-color",
          colorTheme[itemText]
        );
        if (index < 3) {
          cy.wrap(dropDown).click();
        }
      });
    });
  }
}

export default HomePage;
