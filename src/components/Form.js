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

    <textarea placeholder="Raw JSON Body"></textarea>
    <h2>Headers</h2>
    <h3>Basic Authorization</h3>
    <input type="text" placeholder="Username"></input>
    <input type="password" placeholder="Password"></input>
    <h3>Bearer Authorization</h3>
    <input type="text" placeholder="Bearer Token"></input>

    <button type="submit">Go</button>

  </form>;
}
