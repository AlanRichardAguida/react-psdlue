import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Personagem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="alert alert-info">
        <span style={{ color: this.props.item.eye_color }}>{this.props.item.name} - {this.props.item.eye_color}</span>
        <button className="btn btn-danger btn-sm float-right" onClick={()=> this.props.onRemove(this.props.item)}  >Remover</button>
      </div>
    );
  }
}

export default Personagem;