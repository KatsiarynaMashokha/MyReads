import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

class BookSearch extends Component {
  state = {
    query: "",
    foundBooks: []
  };

  handleInput = query => {
    this.setState({ query });
    let bookQuery = this.state.query;
    console.log(bookQuery);
    if (bookQuery) this.getSearchResults(bookQuery);
  };

  getSearchResults = query => {
    BooksAPI.search(query).then(results => {
      if (!results.error) {
        console.log(results);
        this.setState({ foundBooks: results });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={event => this.handleInput(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.foundBooks.map(book => (
              <Book currentBook={book} key={book.id} onChangeShelf={this.props.onChangeShelf}/>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
