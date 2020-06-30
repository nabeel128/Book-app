import React,{Component}from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BookDetail from "../components/book-detail/book-detail";
import axios from "axios";
class  BookDetailPage extends Component{
  constructor(props){
    super(props);
    this.state={
      book : {},
      isLoading: true, 
    }
  }   
  componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.props.bookID )
    .then((response)=>{ 
      console.log(response);
        this.setState({
          book: response.data,          
          isLoading:false
          
        })
    })
  }

  render(){

  return (
    <div className="has-fixed-footer">
      <Header />
      {this.state.isLoading ?
      <p>isLoading...</p> :
      <BookDetail book={this.state.book}/>}     
      <Footer />
    </div>
  );
};
}
export default BookDetailPage;
