import React, { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.components';
import 'tachyons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  searchHandler = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterField = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App tc">
        <h1 className="title ">Monsters Rolodox</h1>

        <SearchBox
          changeHandler={this.searchHandler}
          placeholder="search monsters"
        />

        <CardList monsters={filterField} />
      </div>
    );
  }
}

export default App;
