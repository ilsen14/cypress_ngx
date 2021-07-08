// <reference types=“cypress” />
describe("login", () => {

it("Compare modelText PLP and PDP", () => {
    cy.visit("https://www.gsmarena.com/");
  //Select Brand
  cy.get('.brandmenu-v2').contains("Apple").click();
  //Get text on PLP
  cy.get(".makers")
    .find("strong")
    .eq(0)
    .then(($modelPlpVar) => {
      return $modelPlpVar.text();
    })
    .as("modelPlpVarText");
  //Perform click
  cy.get(".makers").find("strong").eq(0).click();
  //Get text on PDP
  cy.get(".specs-phone-name-title")
    .then(($phoneNameTitle) => {
      return $phoneNameTitle.text();
    })
    .as("modelPdpTitleText");
  cy.get("@modelPlpVarText").then(($m) => {
    cy.get("@modelPdpTitleText").then(($mPdp) => {
      cy.log($mPdp); //Samsung Galaxy F22
      cy.log($m); //Galaxy F22
      expect($mPdp).to.equal("Apple " + $m);
    });
  });
});

it("Check sorting by Best Rating ", () => {


  cy.get(".article-info-meta").find("a").contains("Opinions").click();
  cy.get("#sort-comments").select("Best rating");
  cy.wait(10);
  cy.get(".thumbs-score").then((numbers) => {
    const numbersInt = numbers.toArray().map((el) => parseInt(el.innerText));
    const numbersIntSorted = numbers
      .toArray()
      .map((el) => parseInt(el.innerText))
      .sort(function (a, b) {
        return b - a; // a-b сортує навпаки
      });
    //convert to string
    const numbersString = numbersInt.toString();
    const numberStringSorted = numbersIntSorted.toString();
    expect(numbersString).to.equal(numberStringSorted);
    cy.log(numbersString);
    cy.log(numberStringSorted);
  });
})
})
