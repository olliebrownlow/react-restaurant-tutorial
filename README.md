[![CircleCI](https://circleci.com/gh/olliebrownlow/react-restaurant-tutorial.svg?style=shield)](https://circleci.com/gh/olliebrownlow/react-restaurant-tutorial)

# React TDD tutorial

## Opinion-Ate

Tutorial to practice TDDing a React application. This particular application is for restaurant dish rating. It will include a list of reatuarants and the dishes for each restaurant along with a rating for each dish.

## Tech

- Yarn (1.19.1)
- Parcel (1.12.4)
- React (16.11.0)
- Cypress (3.1.3) -> end-2-end testing
- Jest (24.9.0) -> unit testing
- React-testing-library (9.4.0) -> component testing
- Eslint (6.6.0)
- React Meterialize (3.5.0) -> styling
- React-router-dom (5.1.2) -> routing
- Formik (2.0.8) -> for building forms in React
- Redux (4.0.5) -> for state management
- React-Redux (7.1.3) -> for state management

## Getting started

Clone this repo to your desired directory and run:

- `yarn install` to install the dependencies.
- `yarn start` to start the server and navigate to localhost:1234 in your favourite web browser.
- `yarn unit` to run the Jest and React-testing-library unit tests.
- `yarn e2e` to run the end-2-end Cypress tests (you may need to delete `DISPLAY=localhost:0.0` from the `{"e2e":}` script in the package.json file).
- `yarn e2e-cli` to run the end-2-end Cypress tests on the command line.
- `yarn lint` to run the linter.
