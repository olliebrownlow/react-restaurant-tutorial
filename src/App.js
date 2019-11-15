import React from "react";
import { Col, Row } from "react-materialize";
import RestaurantListPage from "./RestaurantListPage";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={8} l={4} offset="m2 l4">
            <RestaurantListPage />
          </Col>
        </Row>
      </div>
    );
  }
}
