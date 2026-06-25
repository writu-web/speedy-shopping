describe("register form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });
  it("it will enter username", () => {
    cy.get('[data-test="register-username"]').type("writu{enter}");
  });
  it("it will enter email", () => {
    cy.get('[data-test="register-email"]').type("writu@gmail.com{enter}");
  });
  it("it will enter password", () => {
    cy.get('[data-test="register-password"]').type("12345678{enter}");
  });
});
