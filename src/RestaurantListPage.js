import React, { Component } from "react";
import { Button, Modal, Row } from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

export default class RestaurantListPage extends Component {
  state = { restaurantNames: [] };

  closeModal = () => {
    const elem = document.getElementById("addRestaurantModal");
    // M throws linting error but is necessary so:
    // eslint-disable-next-line no-undef
    const instance = M.Modal.getInstance(elem);
    instance.close();
  };

  handleAddRestaurant = newRestaurantName => {
    this.setState(state => ({
      restaurantNames: [newRestaurantName, ...state.restaurantNames],
    }));
    this.closeModal();
  };

  handleCancelAddRestaurant = () => {
    this.closeModal();
  };

  render() {
    const { restaurantNames } = this.state;

    return (
      <div>
        <Modal
          id="addRestaurantModal"
          data-test="addRestaurantModal"
          header="New Restaurant"
          options={{
            dismissible: false,
          }}
          actions={[]}
          trigger={
            <Button data-test="addRestaurantButton">Add Restaurant</Button>
          }
        >
          <NewRestaurantForm
            onSave={this.handleAddRestaurant}
            onCancel={this.handleCancelAddRestaurant}
          />
        </Modal>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}
