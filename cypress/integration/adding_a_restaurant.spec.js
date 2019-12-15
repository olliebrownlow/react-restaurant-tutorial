describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const restaurantName = "Sushi Place";

    cy.visit("http://localhost:1234");

    // modal not shown on start
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // open modal
    cy.get('[data-test="addRestaurantButton"]').click();

    // modal can be cancelled
    cy.get('[data-test="addRestaurantModal"] button.modal-close').click();

    // modal not shown again
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // open modal
    cy.get('[data-test="addRestaurantButton"]').click();

    // modal allows typing of a restaurant name
    cy.get('input[data-test="newRestaurantName"]').type(restaurantName);

    // restaurant saved
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    // modal not shown again
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // added restaurant name visible
    cy.contains(restaurantName);
  });
});
