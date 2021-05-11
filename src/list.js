import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Personagem from './personagem';

class List extends Component {
  constructor() {
    super();
    this.state = {
      personagens: []
    };
  }

  componentDidMount() {
    let initialPersonagens = [];
    fetch('https://swapi.dev/api/people/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        initialPersonagens = data.results.map(element => {
          return element;
        });
        console.log(initialPersonagens);
        initialPersonagens.sort(function(a, b) {
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
          personagens: initialPersonagens
        });
      });
  }

  onRemoveHandler = item => {
    var clonePersonagens = [...this.state.personagens];
    var index = clonePersonagens.indexOf(item);
    clonePersonagens.splice(index, 1);
    this.setState({ personagens: clonePersonagens });
  };

  render() {
    return (
      <div className="list">
        <div className="list-header" />
        {this.state.personagens.map(item => (
          <Personagem
            key={item.name}
            item={item}
            onRemove={this.onRemoveHandler}
          />
        ))}
      </div>
    );
  }
}

export default List;
