/// <reference types="cypress" />

class FormLayouts {
  static verifyElementsInDOM() {
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });
    //By Tag Name
    cy.get("nb-card-header");

    //by ID
    cy.get("#inputEmail1");

    //by Class Name
    cy.get(".layout-container");

    //by Attribute
    cy.get("[placeholder]");

    //by Attribute with value
    cy.get('[placeholder="Jane Doe"]');
  }

  static gridUsageTest() {
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });
    cy.contains("nb-card", "Using the Grid").then((gridWindow) => {
      cy.wrap(gridWindow).find("#inputEmail1").type("Ivan");
      cy.wrap(gridWindow).find('[placeholder="Password"]').type("Kypal");
      cy.wrap(gridWindow).find('[type="radio"]').eq(0).should("not.be.checked");
      cy.wrap(gridWindow).find("nb-radio").eq(1).should("not.be.checked");
      cy.wrap(gridWindow).find('[type="radio"]').eq(0).check({ force: true });
      cy.wrap(gridWindow)
        .find("nb-radio")
        .eq(2)
        .should("have.text", "Disabled Option");
      cy.wrap(gridWindow).find('[type="radio"]').eq(0).should("be.checked");
      cy.wrap(gridWindow).find('[type="submit"]').click({ force: true });
    });
  }

  static testBasicForm() {
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });
    cy.contains("nb-card", "Basic form").then((basicForm) => {
      cy.wrap(basicForm)
        .find('[for="exampleInputEmail1"]')
        .should("have.text", "Email address");
      cy.wrap(basicForm)
        .find('[for="exampleInputPassword1"]')
        .should("have.text", "Password");
      cy.wrap(basicForm).find("#exampleInputEmail1").type("Klint");
      cy.wrap(basicForm).find("#exampleInputPassword1").type("Istvyd");
      cy.wrap(basicForm)
        .find('[class="custom-checkbox"]')
        .should("not.be.checked");
      cy.wrap(basicForm).find('[type="checkbox"]').check({ force: true });
      cy.wrap(basicForm).find('[type="submit"]').click({ force: true });
    });
  }
}

export default FormLayouts;
