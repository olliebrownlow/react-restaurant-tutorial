import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col, Row } from "react-materialize";
import RestaurantListPage from "./RestaurantListPage";
import RestaurantDetailPage from "./RestaurantDetailPage";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Row>
            <Col s={12} m={8} l={4} offset="m2 l4">
              <Route path="/" exact component={RestaurantListPage} />
              <Route
                path="/restaurants/:name"
                component={RestaurantDetailPage}
              />
            </Col>
          </Row>
        </Router>
      </Provider>
    );
  }
}
