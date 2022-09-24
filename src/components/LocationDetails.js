import React from "react";
import PropTypes from "prop-types";

export default function LocationDetails({ props }) {
  return <h1>{`${props.city}, ${props.country}`}</h1>;
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
