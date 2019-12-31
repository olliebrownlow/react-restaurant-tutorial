import React, { Component } from "react";
import { Button, TextInput, Row, Col } from "react-materialize";
import { Formik } from "formik";

export default class NewRestaurantForm extends Component {
  validate = values => {
    const errors = {};
    if (!values.restaurantName) {
      errors.restaurantName = "Name cannot be blank";
      errors.className = "invalid";
    }
    return errors;
  };

  handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    const { onSave } = this.props;

    onSave(restaurantName);
    resetForm();
  };

  handleCancel = ({ resetForm }) => () => {
    resetForm();
    this.props.onCancel();
  };

  renderForm = ({ values, errors, handleChange, handleSubmit, resetForm }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <TextInput
          className={errors.className}
          s={12}
          label="Restaurant Name"
          name="restaurantName"
          id="restaurantName"
          validate={false}
          value={values.restaurantName}
          error={errors.restaurantName}
          onChange={handleChange}
          data-test="newRestaurantName"
        />
      </Row>
      <Row>
        <Col>
          <Button
            type="button"
            data-test="cancelAddRestaurantButton"
            onClick={this.handleCancel({ resetForm })}
          >
            Cancel
          </Button>
        </Col>
        <Col>
          <Button type="submit" data-test="saveNewRestaurantButton">
            Save
          </Button>
        </Col>
      </Row>
    </form>
  );

  render() {
    return (
      <Formik
        initialValues={{ restaurantName: "" }}
        validate={this.validate}
        onSubmit={this.handleSave}
      >
        {this.renderForm}
      </Formik>
    );
  }
}
