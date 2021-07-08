/// <reference types="cypress" />

import FormLayOutPage from "./pageObjects/FormLayOutPage.js";
import HomePage from "./pageObjects/HomePage.js";
import TablesAndDataPage from "./pageObjects/TablesAndDataPage.js";

describe("first test", () => {
    beforeEach("visit WebSite and Layout Forms", () => {
      cy.visit("http://localhost:4200");
    });
  
    it('Search for elements',() =>{
        FormLayOutPage.openFormPage();
        FormLayOutPage.findElements();
    })

    it('Submit button search',() =>{
        FormLayOutPage.openFormPage();
        FormLayOutPage.findSubmitButton();
    })
    it('Assert checkBoxes',() =>{
        FormLayOutPage.openFormPage();
        FormLayOutPage.checkBoxAssertions();
    })
    it('Test Grid Usage',() =>{
        FormLayOutPage.openFormPage();
        FormLayOutPage.gridUsageTest();
    })

    it('Basic form test',() =>{
        FormLayOutPage.openFormPage();
        FormLayOutPage.basicFormTest();
  });

    it('Check background', () => {
        HomePage.checkHomePageThemes()
    })

    it.only('Test age change', () => {
        TablesAndDataPage.openTablesPage()
        TablesAndDataPage.changeLarryAge();
        TablesAndDataPage.createNewUser()
        TablesAndDataPage.checkCreatedUser()
        TablesAndDataPage.searchByAge()
    })
})