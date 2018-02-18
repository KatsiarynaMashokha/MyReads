import React, { Component } from "react";
import ListBooks from "./Components/ListBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookSearch from "./Components/BookSearch";
import { Link, Route } from "react-router-dom";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      let books = this.state.books.filter(
        currentBook => currentBook.id !== book.id
      );
      books.push(book);
      this.setState({ books });
    });
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              allBooks={this.state.books}
              onChangeShelf={this.onChangeShelf}
            />
          )}
        />
        <Route exact path="/search" component={BookSearch} />
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    );
  }
}

export default App;
