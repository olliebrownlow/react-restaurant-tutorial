describe("adding a dish", () => {
  it("displays the dish in the list", () => {
    const restaurantName = "Sushi Place";
    const restaurantName2 = "Burger Place";
    const dishName = "Volcano Rolls";
    const dishName2 = "Mega Burger";

    cy.visit("http://localhost:1234");

    addRestaurant(restaurantName);
    goToRestaurantPage(restaurantName);
    modalNotShownAtTheStart();
    modalAddsNewDish(dishName);
    dishesRetainedWhenLeavingPage(restaurantName, dishName);
    dishesStoredPerRestaurant(restaurantName2, dishName, dishName2);
  });

  function addRestaurant(restaurantName) {
    // open modal
    cy.get('[data-testid="addRestaurantButton"]').click();
    // modal allows typing of a restaurant name
    cy.get('input[data-testid="newRestaurantName"]').type(restaurantName);
    // restaurant saved
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
  }

  function goToRestaurantPage(restaurantName) {
    // click on relevant restaurant
    cy.contains(restaurantName).click();
  }

  function modalNotShownAtTheStart() {
    //modal not visible
    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");
  }

  function modalAddsNewDish(dishName) {
    // open dish modal
    cy.get('[data-testid="addDishButton"]').click();
    // type dish name
    cy.get('input[data-testid="newDishName"]').type(dishName);
    // save Dish
    cy.get('[data-testid="saveNewDishButton"]').click();
    // Dish modal now not visible
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
    // added Dish name is visible
    cy.contains(dishName);
  }

  function dishesRetainedWhenLeavingPage(restaurantName, dishName) {
    cy.get('[data-testid="backButton"]').click();
    cy.contains(restaurantName).click();
    cy.contains(dishName);
    cy.get('[data-testid="backButton"]').click();
  }

  function dishesStoredPerRestaurant(restaurantName, absentDishName, dishName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    cy.contains(restaurantName).click();
    cy.contains(absentDishName).should("not.exist");
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('input[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishButton"]').click();
    cy.contains(dishName);
    cy.get('[data-testid="backButton"]').click();
  }
});
