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

  handleFormChange = ({ target }) => {
    if(target.name === 'routeMethod') {
      this.setState({ [target.name]: target.id });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  render() {
    return <>
      <Header />
      <History />
      <Form handleChange={this.handleFormChange}/>
      <Results />
      <Footer />
    </>;
  }
  
}
