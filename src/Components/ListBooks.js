import React, { Component } from "react";
import "../App.css";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

class ListBooks extends Component {
  render() {
    const { allBooks, onChangeShelf } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={allBooks.filter(
              book => book.shelf === "currentlyReading"
            )}
            shelfTitle="Currently Reading"
            onChangeShelf={onChangeShelf}
          />
          <BookShelf
            books={allBooks.filter(
              book => book.shelf === "wantToRead"
            )}
            shelfTitle="Want to read"
            onChangeShelf={onChangeShelf}
          />
          <BookShelf
            books={allBooks.filter(book => book.shelf === "read")}
            shelfTitle="Read"
            onChangeShelf={onChangeShelf}
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
