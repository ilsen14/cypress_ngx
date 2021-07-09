/// <reference types="cypress" />

class SmartTables {
  static verifyAgeTest() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    cy.wait(100)
    cy.get('ngx-header').then(header => {
        cy.wrap(header).find('nb-icon').first().click({force:true})
    })
  

    cy.get("tbody")
      .contains("tr", "John")
      .then((tableBody) => {
        cy.wrap(tableBody).find(".nb-edit").click({ force: true });
        cy.wrap(tableBody).find('[placeholder="Age"]').clear().type("40");
        cy.wrap(tableBody).find(".nb-checkmark").click({ force: true });
        cy.wrap(tableBody).find("td").eq(6).should("contain", "40");
      });

    const age = [20, 40, 150, 30];

    cy.wrap(age).each((age) => {
      cy.get('thead [placeholder="Age"]').clear().type(age);
      cy.wait(300);
      cy.get("tbody tr").each((tRow) => {
        if (age === 150) {
          cy.wrap(tRow).should("contain", "No data found");
        } else {
          cy.wrap(tRow).find("td").eq(6).should("contain", age);
        }
      });
    });
  }

  static verifyDeletingPopUpWindow() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.wait(100)

    cy.get('ngx-header').then(header => {
        cy.wrap(header).find('nb-icon').first().click({force:true})
    })
  

    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("tbody tr")
      .first()
      .find(".nb-trash")
      .click({ force: true })
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "Are you sure you want to delete?"
        );
      });
  }

  static verifyCancelDelete() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.wait(100)

    cy.get('ngx-header').then(header => {
        cy.wrap(header).find('nb-icon').first().click({force:true})
    })
  

    cy.get("tbody tr").first().find(".nb-trash").click({ force: true });
    cy.on("window:confirm", () => false);
  }
}

export default SmartTables;
