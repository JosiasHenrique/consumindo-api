import React, { Component } from "react";
import api from './api';

export default class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ filmes: response.data });
  }

  render() {
    const { filmes } = this.state;
    return (
      <div>
        <h1>Listar filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong>Titulo: </strong>
              {filme.show.name}
              {filme.show.url}
            </h2>
          </li>
        ))}
      </div>
    );
  }
}
