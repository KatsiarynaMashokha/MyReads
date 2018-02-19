import React, { Component } from "react";
import "../App.css";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

class ListBooks extends Component {
  render() {
    const { allBooks, onChangeShelf } = this.props;
    const shelves = [
      {
        id: "currentlyReading",
        title: "Currently Reading",
        books: allBooks.filter(book => book.shelf === "currentlyReading")
      },
      {
        id: "wantToRead",
        title: "Want to read",
        books: allBooks.filter(book => book.shelf === "wantToRead")
      },
      {
        id: "read",
        title: "Read",
        books: allBooks.filter(book => book.shelf === "read")
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <BookShelf
              key={shelf.id}
              shelfTitle={shelf.title}
              books={shelf.books}
              onChangeShelf={onChangeShelf}
            />
          ))}
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
