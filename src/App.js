import React, { Component } from "react";
import ListBooks from "./Components/ListBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <ListBooks allBooks={this.state.books} />
      </div>
    );
  }
}

export default App;
