import React, { Component } from "react";
import "../App.css";
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
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

BookShelf.propTypes = {
  shelfTitle: PropTypes.string,
  books: PropTypes.array.isRequired
};

export default BookShelf;
