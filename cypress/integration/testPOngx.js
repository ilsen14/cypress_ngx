/// <reference types ="Cypress" />

import HomePage from "../integration/pageObjects/HomePage.js";
import FormLayouts from "./pageObjects/forms/FormLayouts.js";
import DialogPage from "./pageObjects/modals/DialogPage.js";
import ToasterPage from "./pageObjects/modals/ToasterPage.js";
import ToolTipPage from "./pageObjects/modals/ToolTipPage.js";
import SmartTables from "./pageObjects/tables/SmartTables.js";

describe("testing local host website", () => {
  beforeEach("run website", () => {
    cy.visit("http://localhost:4200/pages");
    cy.intercept("GET", "/sockjs-node/*");
  });

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
});
