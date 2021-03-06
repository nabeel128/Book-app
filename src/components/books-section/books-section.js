import React from "react";
import BookContainer from  "./books-container"
let BooksSection=(props)=>{
    if (props.books.length === 0){
      return(
        <section id="books-section">
                <div className="container">
                  <div className="section-title">
                  <h1>{"NO books found for "+props.title}</h1>
                  </div>                    
                </div>
              </section>
            )
    }
    return(
<section id="books-section">
        <div className="container">
          <div className="section-title">
          <h1>{props.title+ " Books"}</h1>
          </div>
            <BookContainer books={props.books}/>
        </div>
      </section>
    )
  }
export default BooksSection;