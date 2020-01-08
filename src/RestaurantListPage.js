import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Row } from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";
import { addRestaurant } from "./store/restaurants/actions";

class RestaurantListPage extends Component {
  closeModal = () => {
    const elem = document.getElementById("addRestaurantModal");
    // M throws linting error but is necessary so:
    // eslint-disable-next-line no-undef
    const instance = M.Modal.getInstance(elem);
    instance.close();
  };

  handleAddRestaurant = newRestaurantName => {
    this.props.addRestaurant(newRestaurantName);
    this.closeModal();
  };

  handleCancelAddRestaurant = () => {
    this.closeModal();
  };

  render() {
    const { restaurants } = this.props;

    return (
      <div>
        <Modal
          id="addRestaurantModal"
          data-testid="addRestaurantModal"
          header="New Restaurant"
          options={{
            dismissible: false,
          }}
          actions={[]}
          trigger={
            <Button data-testid="addRestaurantButton">Add Restaurant</Button>
          }
        >
          <NewRestaurantForm
            onSave={this.handleAddRestaurant}
            onCancel={this.handleCancelAddRestaurant}
          />
        </Modal>
        <Row>
          <RestaurantList restaurantNames={restaurants} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

const mapDispatchToProps = {
  addRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListPage);
