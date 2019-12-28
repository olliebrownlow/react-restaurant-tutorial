describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const restaurantName = "Sushi Place";

    cy.visit("http://localhost:1234");

    modalNotShownOnStart();
    modalCanBeCancelled();
    modalDisplaysValidationErrors();
    modalAddsNewRestaurant(restaurantName);
  });

  function modalNotShownOnStart() {
    //modal not visible
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");
  }

  function modalCanBeCancelled() {
    // open modal
    cy.get('[data-test="addRestaurantButton"]').click();
    // modal can be cancelled with close button
    cy.get('[data-test="addRestaurantModal"] button.modal-close').click();
    // modal is now not visible
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");
  }

  function modalDisplaysValidationErrors() {
    // open modal
    cy.get('[data-test="addRestaurantButton"]').click();

    // click save without typing name
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    // no name input so validation error displayed
    cy.get(
      'label[for="restaurantName"][data-error="Name cannot be blank"]',
    ).should("be.visible");

    // close modal
    cy.get('[data-test="addRestaurantModal"] button.modal-close').click();
  }

  function modalAddsNewRestaurant(restaurantName) {
    // open modal
    cy.get('[data-test="addRestaurantButton"]').click();

    // modal allows typing of a restaurant name
    cy.get('input[data-test="newRestaurantName"]').type(restaurantName);

    // restaurant saved
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    // modal now not visible
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // added restaurant name is visible
    cy.contains(restaurantName);
  }
});
