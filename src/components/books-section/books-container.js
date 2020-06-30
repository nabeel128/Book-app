import React from "react";
import Book from "./book"
let BookContainer =(props)=>{

    return (
        <div className="books-container">
     {props.books.map((e,i)=>{
         return(<Book book={e} key={i}/>)
     })}
  
         </div>
    )
}
export default BookContainer;