import React, { Component } from "react";
import { Button, Modal, Row } from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

export default class RestaurantListPage extends Component {
  state = { restaurantNames: [] };

  handleAddRestaurant = newRestaurantName => {
    this.setState(state => ({
      restaurantNames: [newRestaurantName, ...state.restaurantNames],
    }));
    var elem = document.getElementById("addRestaurantModal");
    var instance = M.Modal.getInstance(elem);
    instance.close();
  };

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <Modal
          id="addRestaurantModal"
          header="New Restaurant"
          trigger={
            <Button data-test="addRestaurantButton">Add Restaurant</Button>
          }
        >
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        </Modal>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}
