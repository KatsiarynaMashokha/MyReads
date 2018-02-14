import React, { Component } from "react";
import "../App.css";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1></div>
          <div className="list-books-content"> 
          <BookShelf books={this.props.allBooks.filter(book => book.shelf === "currentlyReading")} shelfTitle="Currently Reading" />
          <BookShelf books={this.props.allBooks.filter(book => book.shelf === "wantToRead")} shelfTitle="Want to read" />
          <BookShelf books={this.props.allBooks.filter(book => book.shelf === "read")} shelfTitle="Read" />
          </div>
      </div>
    );
  }
}

export default ListBooks;
