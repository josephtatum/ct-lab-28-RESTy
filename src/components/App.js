import React, { Component } from 'react';
import Header from './Header';
import History from './History';
import Form from './Form';
import Results from './Results';
import Footer from './Footer';

export default class App extends Component {

  state = {
    apiUrl: '',
    routeMethod: '',
    jsonBody: {},
    authUsername: '',
    authPassword: '',
    bearerToken: '',
    response: '',
    history: [],
  }

  componentDidMount() {

  }

  render() {
    return <>
      <Header />
      <History />
      <Form />
      <Results />
      <Footer />
    </>;
  }
  
}
