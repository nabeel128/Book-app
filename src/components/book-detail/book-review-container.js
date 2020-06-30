import React from "react";
let BookReviewContainer =(props)=>{
return(
    <div className="book-review-container">
    <div className="book-stars">
    <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
    </div>
    <div className="book-review">
      <p>(10)</p>
    </div>
  </div>
)
}
export default BookReviewContainer; 