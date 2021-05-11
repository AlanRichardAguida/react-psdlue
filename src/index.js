import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Lista from './lista';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Star Wars Characters',
      personagens_full : []
    };
  }

  componentDidMount() {
    let initialPersonagens = [];
    fetch('https://swapi.dev/api/people/')
        .then(response => {
            return response.json();
        }).then(data => {
        initialPersonagens = data.results.map((element) => {
            return element;
        });
        console.log(initialPersonagens);
        initialPersonagens.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        console.log(initialPersonagens);
        this.setState({
            personagens_full: initialPersonagens,
        });
    });
  }

  render() {
    return (
          <Lista/>
    );
  }
}

render(<Index />, document.getElementById('root'));
