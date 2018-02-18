import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  this.props.currentBook.imageLinks &&
                  this.props.currentBook.imageLinks.thumbnail
                    ? `${this.props.currentBook.imageLinks.thumbnail}`
                    : `https://placeholdit.co//i/128x193?`
                })`
              }}
            >
              <div className="book-shelf-changer">
                <select
                  value={
                    this.props.currentBook.shelf
                      ? this.props.currentBook.shelf
                      : "none"
                  }
                  onChange={e =>
                    this.props.onChangeShelf(
                      this.props.currentBook,
                      e.target.value
                    )
                  }
                >
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          </div>
          <div className="book-title">{this.props.currentBook.title}</div>
          <div className="book-authors">{this.props.currentBook.authors}</div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  currentBook: PropTypes.object
};

export default Book;
