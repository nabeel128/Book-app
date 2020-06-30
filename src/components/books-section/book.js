import React from "react";
import { Link } from "react-router-dom";

let Book=(props)=>{
  console.log(props.book)
  let bookInfo={
    image:props.book.volumeInfo.imageLinks? props.book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/250X200",
    title:props.book.volumeInfo.title,
    author:props.book.volumeInfo.authors ?props.book.volumeInfo.authors[0] : "Author",
    id:props.book.id,
  }
    return(
        <div className="book">
        <div className="book-img">
          <img src={bookInfo.image} alt={bookInfo.title} />
        </div>
        <div className={"book-title"}>
        <h3>{bookInfo.title}</h3>
        </div>
        <div className="book-author">
        <p>{bookInfo.author}</p>
        </div>
        <div className="book-call-to-action">
          <Link to ={"/book/"+ bookInfo.id} className="btn btn-highlight">Details</Link>
        </div>
      </div>

    )
}
export default Book;