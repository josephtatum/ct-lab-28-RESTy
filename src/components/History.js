import React from 'react';
import propTypes from 'prop-types';

export default function History({ history }) {

  const historyListItems = history.map(link => (
    <li key={link}>
      {link}
    </li>
  ));

  return (
    <div className="history-section">
      <h2>History</h2>
      <ul className="history-list">
        {historyListItems}
      </ul>
    </div>
  );
}

History.propTypes = {
  history: propTypes.array.isRequired
};
