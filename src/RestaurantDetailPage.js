import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal, Row } from "react-materialize";
import NewDishForm from "./NewDishForm";
import DishList from "./DishList";
import { addDish } from "./store/dishes/actions";

class RestaurantDetailPage extends Component {
  handleAddDish = newDishName => {
    this.props.addDish(newDishName);
    const elem = document.getElementById("addDishModal");
    // M throws linting error but is necessary so:
    // eslint-disable-next-line no-undef
    const instance = M.Modal.getInstance(elem);
    instance.close();
  };

  render() {
    const { dishes } = this.props;
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
          <DishList dishNames={dishes} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes,
  };
}

const mapDispatchToProps = {
  addDish,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantDetailPage);
