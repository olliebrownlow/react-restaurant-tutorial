describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const restaurantName = "Sushi Place";

    cy.visit("http://localhost:1234");

    // modal not shown on start up
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.get('[data-test="addRestaurantButton"]').click();

    // modal can be cancelled
    cy.get('[data-test="addRestaurantModal"] button.modal-close').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // modal allowsadding of a restaurant
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('input[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantName);
  });
});
