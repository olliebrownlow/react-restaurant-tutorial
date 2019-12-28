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

    //modal displays validation errors
    // open modal
    cy.get('[data-test="addRestaurantButton"]').click();

    // save restaurant without typing name
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    // no name input so validation error displayed
    cy.get(
      'label[for="restaurantName"][data-error="Name cannot be blank"]',
    ).should("be.visible");

    // modal allows typing of a restaurant name
    cy.get('label[for="restaurantName"][data-error="Name cannot be blank"]')
      .click() //to reselect the field or cypress thinks it is covered by the error message
      .get('input[data-test="newRestaurantName"]')
      .type(restaurantName);

    // restaurant saved
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    // modal not shown again
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // added restaurant name visible
    cy.contains(restaurantName);
  });
});
