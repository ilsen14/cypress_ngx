/// <reference types="cypress" />

import { table } from "console";

class TablesAndDataPage {
  static openTablesPage() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
  }

  static changeLarryAge() {
    cy.get("tbody")
      .contains("tr", "John")
      .then((row) => {
        cy.wrap(row).find(".nb-edit").click();
        cy.wrap(row).find('[placeholder="Age"]').clear().type("25");
        cy.wrap(row).find(".nb-checkmark").click();
        cy.wrap(row).find("td").eq(6).should("contain", "25");
      });
  }

  static createNewUser() {
    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then( trow => {
        cy.wrap(trow).find('[placeholder="First Name"]').type("Ivan")
        cy.wrap(trow).find('[placeholder="Last Name"]').type("Kypal")
        cy.wrap(trow).find('[placeholder="Age"]').type("1000")
        cy.wrap(trow).find('.nb-checkmark').click()
        })
    }
    static checkCreatedUser () {
        cy.get('tbody tr').first().find('td').then( tableColomn => {
            cy.wrap(tableColomn).eq(2).should('contain', 'Ivan')
            cy.wrap(tableColomn).eq(3).should('contain', 'Kypal')
            cy.wrap(tableColomn).eq(6).should('contain', '1000')

        })
    }
    
    static searchByAge(){

        const age = [20, 30, 200, 1000]

        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]') .clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                if(age == 200){
                    cy.wrap(tableRow).should('contain', 'No data found')
                }else{
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })
    }
  }

export default TablesAndDataPage;
