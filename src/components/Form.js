import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ handleChange }) {

  return <form className="api-form">

    <input type="text" name="apiUrl" placeholder="API Route" onChange={handleChange}></input>

    <input type="radio" id="get" name="routeMethod" onChange={handleChange}></input>
    <label htmlFor="get">Get</label>
    <input type="radio" id="post" name="routeMethod" onChange={handleChange}></input>
    <label htmlFor="post">Post</label>
    <input type="radio" id="put" name="routeMethod" onChange={handleChange}></input>
    <label htmlFor="put">Put</label>
    <input type="radio" id="patch" name="routeMethod" onChange={handleChange}></input>
    <label htmlFor="patch">Patch</label>
    <input type="radio" id="delete" name="routeMethod" onChange={handleChange}></input>
    <label htmlFor="delete">Delete</label>

    <textarea placeholder="Raw JSON Body" name="jsonBody" onChange={handleChange}></textarea>
    <h2>Headers</h2>
    <h3>Basic Authorization</h3>
    <input type="text" placeholder="Username" name="authUsername" onChange={handleChange}></input>
    <input type="password" placeholder="Password" name="authPassword" onChange={handleChange}></input>
    <h3>Bearer Authorization</h3>
    <input type="text" placeholder="Bearer Token" name="bearerToken" onChange={handleChange}></input>

    <button type="submit">Go</button>

  </form>;
}
