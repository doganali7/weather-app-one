import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App(props) {
  // eslint-disable-next-line no-restricted-globals
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
