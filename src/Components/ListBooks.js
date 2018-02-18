import React, { Component } from "react";
import "../App.css";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.props.allBooks.filter(
              book => book.shelf === "currentlyReading"
            )}
            shelfTitle="Currently Reading"
            onChangeShelf={this.props.onChangeShelf}
          />
          <BookShelf
            books={this.props.allBooks.filter(
              book => book.shelf === "wantToRead"
            )}
            shelfTitle="Want to read"
            onChangeShelf={this.props.onChangeShelf}
          />
          <BookShelf
            books={this.props.allBooks.filter(book => book.shelf === "read")}
            shelfTitle="Read"
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
      </div>
    );
  }
}

ListBooks.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  allBooks: PropTypes.array.isRequired
};

export default ListBooks;
