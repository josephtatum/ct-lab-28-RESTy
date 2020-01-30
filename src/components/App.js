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

  handleFormChange = ({ target }) => {
    if(target.name === 'routeMethod') {
      this.setState({ [target.name]: target.id });
    } else if(target.name === 'jsonBody') {
      this.setState({ [target.name]: JSON.parse(target.value) });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    fetch(this.state.apiUrl)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ response: res, history: [...this.state.history, this.state.apiUrl] });
      });
  }

  render() {
    return <>
      <Header />
      <History history={this.state.history}/>
      <Form
        onChange={this.handleFormChange}
        onSubmit={this.handleFormSubmit}
      />
      <Results response={this.state.response}/>
      <Footer />
    </>;
  }
  
}
