import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { DebounceInput } from "react-debounce-input";

class BookSearch extends Component {
  state = {
    query: "",
    foundBooks: [],
    resultsLoaded: false
  };

  handleInput = query => {
    this.setState({ query: query, resultsLoaded: true});
    this.getSearchResults(query);
  };

  getSearchResults = query => {
    if (!query) {
      return this.setState({ foundBooks: [] });
    }

    BooksAPI.search(query).then(results => {
      if (results && !results.error) {
        this.props.books.forEach(book => {
          results.map(foundBook => {
            if (book.id === foundBook.id) {
              foundBook.shelf = book.shelf;
            }
          });
        });
        this.setState({ foundBooks: results });
      } else {
        this.setState({ foundBooks: [] });
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
              <DebounceInput
                debounceTimeout={300}
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={event => this.handleInput(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="search-books-results">
        {(!this.state.foundBooks.length && this.state.resultsLoaded)&& <h4>No Books Found</h4>}
          <ol className="books-grid">
            {this.state.foundBooks.map(book => (
              <Book
                currentBook={book}
                key={book.id}
                onChangeShelf={this.props.onChangeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default BookSearch;
