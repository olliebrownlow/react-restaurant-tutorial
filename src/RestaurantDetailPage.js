import React, { Component } from "react";
import { Button, Modal, Row } from "react-materialize";
import NewDishForm from "./NewDishForm";
import DishList from "./DishList";

export default class RestaurantDetailPage extends Component {
  state = { dishNames: [] };

  handleAddDish = newDishName => {
    this.setState(state => ({
      dishNames: [newDishName, ...state.dishNames],
    }));
    const elem = document.getElementById("addDishModal");
    // M throws linting error but is necessary so:
    // eslint-disable-next-line no-undef
    const instance = M.Modal.getInstance(elem);
    instance.close();
  };

  render() {
    const { dishNames } = this.state;
    return (
      <div>
        <Link to="/" data-testid="backButton">
          Back
        </Link>
        <Modal
          header="New Dish"
          id="addDishModal"
          options={{
            dismissible: false,
          }}
          actions={[]}
          trigger={<Button data-testid="addDishButton">Add Dish</Button>}
        >
          <NewDishForm onSave={this.handleAddDish} />
        </Modal>
        <Row>
          <DishList dishNames={dishNames} />
        </Row>
      </div>
    );
  }
}
