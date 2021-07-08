/// <reference types="cypress" />

class FormLayOutPage {
  static openFormPage() {
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
  }

  static findElements() {
    //by Tag Name
    cy.get("input");

    //by Tag Name And Class with Value
    cy.get('input[type="email"]');

    //By iD
    cy.get("#inputEmail");

    // By class name
    cy.get(".input-full-width");

    //By Attribute Name
    cy.get("[placeholder]");
  }

  static findSubmitButton() {
    cy.get('input[placeholder="Jane Doe"]')
      .parents(".inline-form-card")
      .find("button")
      .should("contain", "Submit");
  }

  static checkBoxAssertions() {
    cy.get('input[placeholder="Jane Doe"]')
      .parents(".inline-form-card")
      .find(".label")
      .should("contain", "Remember me")
      .find(".custom-checkbox")
      .should("not.be.checked");

    cy.get('input[placeholder="Jane Doe"]')
      .parents(".inline-form-card")
      .find(".label")
      .should("contain", "Remember me")
      .find('input[type="checkbox"]')
      .check({ force: true })
      .should("be.checked");

    cy.get('input[placeholder="Jane Doe"]')
      .parents(".inline-form-card")
      .find(".label")
      .should("contain", "Remember me")
      .find('input[type="checkbox"]')
      .uncheck({ force: true })
      .should("not.be.checked");
  }

  static gridUsageTest() {
    cy.get("#inputEmail1")
      .parents(".col-md-6")
      .find(".col-sm-9")
      .find('span[class="text"]')
      .should("contain", "Option 1");

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then(($RadioButton) => {
        cy.wrap($RadioButton)
          .first()
          .check({ force: true })
          .should("be.checked");
      });
    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then(($RadioButton) => {
        cy.wrap($RadioButton).eq(1).should("not.be.checked");
      });

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then(($RadioButton) => {
        cy.wrap($RadioButton).eq(2).should("be.disabled");
      });
  }

  static basicFormTest() {
    cy.contains("nb-card", "Basic form").then(function (labelForm) {
      const labelEmail = labelForm.find('[for="exampleInputEmail1"]').text();
      const labelPassword = labelForm
        .find('[for="exampleInputPassword1"]')
        .text();
      expect(labelEmail).to.equal("Email address");
      expect(labelPassword).to.equal("Password");
      cy.wrap(labelForm)
        .find('[placeholder="Email"]')
        .type("someemail@mail.com")
        .clear();
      cy.wrap(labelForm).find('[placeholder="Email"]').should("be.empty");
      cy.wrap(labelForm)
        .find('[placeholder="Email"]')
        .type("someemail@mail.com");
      cy.wrap(labelForm).find('[placeholder="Password"]').type("somePassword");
      cy.wrap(labelForm).find(".custom-checkbox").should("not.be.checked");
      cy.wrap(labelForm).find('[type="checkbox"]').check({ force: true });
      cy.wrap(labelForm).find('[type="checkbox"]').should("be.checked");
      cy.wrap(labelForm)
        .find(".form-group")
        .eq(2)
        .should("contain", "Check me out");
      cy.wrap(labelForm).find('[type="submit"]').click();
    });
  }
}

export default FormLayOutPage;
