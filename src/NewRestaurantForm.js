import React, { Component } from "react";
import { Button, TextInput, Row } from "react-materialize";
import { Formik } from "formik";

export default class NewRestaurantForm extends Component {
  validate = values => {
    const errors = {};
    const className = "";
    if (!values.restaurantName) {
      errors.restaurantName = "Name cannot be blank";
      errors.className = "invalid";
    }
    console.log(errors.className);
    return errors;
  };

  handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    const { onSave } = this.props;

    onSave(restaurantName);
    resetForm();
  };

  renderForm = ({ values, errors, handleChange, handleSubmit }) => (
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
        <Button type="submit" data-test="saveNewRestaurantButton">
          Save
        </Button>
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
