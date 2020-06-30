import React from "react";
import BookInfo from "./book-info";
import BookReviewContainer from "./book-review-container";
let BookContainer =(props)=>{        
  let bookInfo ={
    image: props.book.items[0].volumeInfo.imageLinks.thumbnail,
    title:props.book.items[0].volumeInfo.title,
    author:props.book.items[0].volumeInfo.authors,
    description:props.book.items[0].volumeInfo.description,
  

  }
return (
    <div className="book-container">
    <div className="book-img">
      <img src={bookInfo.image} alt={bookInfo.title} />
    </div>
    <BookInfo title={bookInfo.title} author={bookInfo.author} description={bookInfo.description} />
    <BookReviewContainer/>
     
  
  </div>
)
}
export default BookContainer;