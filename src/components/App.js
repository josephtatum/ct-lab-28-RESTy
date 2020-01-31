import React, { Component } from 'react';
import Header from './Header';
import History from './History';
import Form from './Form';
import Results from './Results';
import Footer from './Footer';
import '../styles.css';

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
      this.setState({ [target.name]: target.value });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    let headers;
    let body;
    if(this.state.routeMethod === 'post' || this.state.routeMethod === 'put' || this.state.routeMethod === 'patch') {
      headers = { 'Content-Type': 'application/json' };
      body = this.state.jsonBody;
    }

    console.log(body);

    fetch(this.state.apiUrl, {
      method: this.state.routeMethod.toUpperCase(),
      headers: headers,
      body: body 
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ response: res, history: [...this.state.history, this.state.apiUrl] });
      });
  }

  render() {
    return <>
      <Header />
      <div className="main-container">
        <History
          history={this.state.history}
        />
        <div className="secondary-container">
          <Form
            onChange={this.handleFormChange}
            onSubmit={this.handleFormSubmit}
          />
          <Results
            response={this.state.response}
          />
        </div>
      </div>
      <Footer />
    </>;
  }
  
}
