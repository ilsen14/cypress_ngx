/// <reference types="cypress" />

class DatePickers {
  static verifySelectedDate() {
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        cy.get("nb-calendar-day-picker").contains("25").click();
        cy.wrap(input)
          .invoke("prop", "value")
          .should("contain", "Jul 25, 2021");
      });
  }

  static selectingDateFromToday() {
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    let date = new Date();
    date.setDate(date.getDate() + 5);
    let futureDay = date.getDate();
    console.log(futureDay);
    let fufureMonth = date.toLocaleString("default", { month: "short" });

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();

        cy.get("nb-calendar-navigation")
          .invoke("attr", "ng-reflect-date")
          .then((dateAttribute) => {
            if (!dateAttribute.includes(fufureMonth)) {
              cy.get('[data-name="chevron-right"]').click();
              cy.get(
                "nb-calendar-day-picker",
                '[class="day-cell ng-star-inserted"]'
              )
                .contains(futureDay)
                .click();
            } else {
              cy.get(
                'nb-calendar-day-picker [class="day-cell ng-star-inserted"]'
              )
                .contains(futureDay)
                .click();
            }
            cy.wrap(input).invoke("prop", "value").should("contain", futureDay);
          });
      });
  }

  static selectOtherMonth() {
    function selectCertainDate(day) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      let futureDay = date.getDate();
      console.log(futureDay);
      let futureMonth = date.toLocaleString("default", { month: "short" });
      let dateAssert =
        futureMonth + " " + futureDay + ", " + date.getFullYear();

      cy.get("nb-calendar-navigation")
        .invoke("attr", "ng-reflect-date")
        .then((dateAttribute) => {
          if (!dateAttribute.includes(futureMonth)) {
            cy.get('[data-name="chevron-right"]').click();
            selectCertainDate(day);
          } else {
            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')
              .contains(futureDay)
              .click();
          }
        });
      return dateAssert;
    }

    cy.contains("Forms").click();
    cy.contains("Datepicker").click();
    cy.wait(100);
    cy.get("ngx-header").then((header) => {
      cy.wrap(header).find("nb-icon").first().click({ force: true });
    });

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dateAssert = selectCertainDate(30);

        cy.wrap(input).invoke("prop", "value").should("contain", dateAssert);
      });
  }
}
export default DatePickers;
