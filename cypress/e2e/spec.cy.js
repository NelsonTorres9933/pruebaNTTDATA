const toSearch = "automatización";
const textToAssert =
  " en 1785, convirtiéndose en el primer proceso industrial completamente automatizado.";
describe("Automation", () => {
  it("Search the first automation process", () => {
    cy.visit("https://www.google.com");
    cy.get("button").should("be.visible").contains("Aceptar todo").click();
    cy.get("textarea").eq(0).should("be.visible").type(toSearch);
    cy.get("li")
      .should("be.visible")
      .contains(new RegExp("^" + toSearch + "$", "g"))
      .click();
    cy.get("span")
      .children("a")
      .contains(new RegExp("^Wikipedia$", "g"))
      .click();
    cy.origin(
      "https://es.wikipedia.org",
      { args: { textToAssert } },
      ({ textToAssert }) => {
        cy.get("div[class=mw-parser-output]")
          .contains(textToAssert)
          .scrollIntoView()
          .screenshot("first automation process", { overwrite: true });
        cy.screenshot("full page", { overwrite: true });
      }
    );
  });
});
