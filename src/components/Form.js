import React from 'react';
import PropTypes from 'prop-types';

export default function Form() {
  return <form className="api-form">

    <input type="text" placeholder="API Route"></input>

    <input type="radio" id="get" name="routeMethod"></input>
    <label HTMLfor="get">Get</label>
    <input type="radio" id="post" name="routeMethod"></input>
    <label HTMLfor="post">Post</label>
    <input type="radio" id="put" name="routeMethod"></input>
    <label HTMLfor="put">Put</label>
    <input type="radio" id="patch" name="routeMethod"></input>
    <label HTMLfor="patch">Patch</label>
    <input type="radio" id="delete" name="routeMethod"></input>
    <label HTMLfor="delete">Delete</label>

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
