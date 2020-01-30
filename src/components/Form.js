import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ onChange, onSubmit }) {

  return <form onSubmit={onSubmit}>

    <input type="text" name="apiUrl" placeholder="API Route" onChange={onChange}></input>

    <input type="radio" id="get" name="routeMethod" onChange={onChange}></input>
    <label htmlFor="get">Get</label>
    <input type="radio" id="post" name="routeMethod" onChange={onChange}></input>
    <label htmlFor="post">Post</label>
    <input type="radio" id="put" name="routeMethod" onChange={onChange}></input>
    <label htmlFor="put">Put</label>
    <input type="radio" id="patch" name="routeMethod" onChange={onChange}></input>
    <label htmlFor="patch">Patch</label>
    <input type="radio" id="delete" name="routeMethod" onChange={onChange}></input>
    <label htmlFor="delete">Delete</label>

    <textarea placeholder="Raw JSON Body" name="jsonBody" onChange={onChange}></textarea>
    <h2>Headers</h2>
    <h3>Basic Authorization</h3>
    <input type="text" placeholder="Username" name="authUsername" onChange={onChange}></input>
    <input type="password" placeholder="Password" name="authPassword" onChange={onChange}></input>
    <h3>Bearer Authorization</h3>
    <input type="text" placeholder="Bearer Token" name="bearerToken" onChange={onChange}></input>

    <button>Go</button>

  </form>;
}
