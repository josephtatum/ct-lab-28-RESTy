import React from 'react';
import PropTypes from 'prop-types';

export default function Results({ response }) {
  console.log(response)
  return <>
    <h2>Results</h2>
    <div className="results-section">
      {response}
    </div>
  </>;
}
