# React TDD tutorial

## Opinion-Ate

Tutorial to practice TDDing a React application. This particular application is for restaurant dish rating. It will include a list of reatuarants and the dishes for each restaurant along with a rating for each dish.

## Tech

- Yarn (1.19.1)
- Parcel (1.12.4)
- react (16.11.0)
- cypress (3.1.3) -> end-2-end testing

## Getting started

Clone this repo to your desired directory and run:

- `yarn install` to install the dependencies.
- `yarn start` to start the server and navigate to localhost:1234 in your favourite web browser.
- `yarn e2e` to run the end-2-end Cypress tests (you may need to delete `DISPLAY=localhost:0.0` from the `{"e2e":}` script in the package.json file).
