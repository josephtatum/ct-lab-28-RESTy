import React from 'react';
import propTypes from 'prop-types';

export default function Results({ response }) {
  return <>
    <h2>Results</h2>
    <div className="results-section">
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  </>;
}

Results.propTypes = {
  response: propTypes.string.isRequired
};
