/// <reference types ="Cypress" />

import HomePage from "../integration/pageObjects/HomePage.js";
import DatePickers from "./pageObjects/forms/DatePickers.js";
import FormLayouts from "./pageObjects/forms/FormLayouts.js";
import DialogPage from "./pageObjects/modals/DialogPage.js";
import ToasterPage from "./pageObjects/modals/ToasterPage.js";
import ToolTipPage from "./pageObjects/modals/ToolTipPage.js";
import SmartTables from "./pageObjects/tables/SmartTables.js";

describe("testing local host website", () => {
  beforeEach("run website", () => {
    cy.intercept("GET", "**/sockjs-node/*" , {"websocket":true,"origins":["*:*"],"cookie_needed":false,"entropy":3413532499}).as('interceptedMethod')
    cy.visit("http://localhost:4200/pages");

    cy.wait('@interceptedMethod')
    cy.get('@interceptedMethod').then(xhr => {
      expect(xhr.response.statusCode).to. equal(200)
    })
  })
 

  it("test scheme color", () => {
    HomePage.testColorScheme();
  });

  it("test Basic Form", () => {
    FormLayouts.testBasicForm();
  });
  it("grid Usage test", () => {
    FormLayouts.gridUsageTest();
  });

  it("verify Elements in DOM", () => {
    FormLayouts.verifyElementsInDOM();
  });

  it("Verify Age test", () => {
    SmartTables.verifyAgeTest();
  });

  it("Delete item by pop up", () => {
    SmartTables.verifyDeletingPopUpWindow();
  });

  it("Cancel deleting by pop up", () => {
    SmartTables.verifyCancelDelete();
  });

  it("Verify dismiss button", () => {
    DialogPage.checkDismissButton();
  });

  it("Verify Dismiss dialog", () => {
    DialogPage.checkDismissDialog();
  });

  it("Verify Toaster Parameters", () => {
    ToasterPage.verifyToasterColorAndText();
  });
  it("Verify Tool tip text presence", () => {
    ToolTipPage.verifyToolTipText();
  });

  it("Click all buttons", () => {
    ToolTipPage.verifyToolTipsClickable();
  });

  it('verifying selected date', () => {
      DatePickers.verifySelectedDate()
  })
  it('selecting certain Date', () => {
    DatePickers.selectingDateFromToday()
  })

  it('verify date selection', () => {
    DatePickers.selectOtherMonth()
  })
});
