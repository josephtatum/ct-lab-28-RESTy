import React from 'react';
import propTypes from 'prop-types';

export default function History({ history }) {

  const historyListItems = history.map(link => (
    <li key={link}>
      {link}
    </li>
  ));

  return <>
    <h2>History</h2>
    <ul className="history-list">
      {historyListItems}
    </ul>
  </>;
}

History.propTypes = {
  history: propTypes.array.isRequired
};
