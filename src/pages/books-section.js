import React,{Component} from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BooksSection from "../components/books-section/books-section";
import axios from "axios";
class BooksSectionPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      books: [],
      isLoading: true,
    }
  }
  componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.props.categoryName )
    // +"&key=AIzaSyBXi7_S9aeCMk-IoIHQPuZDeVdL-_XrNyw")
    .then((response)=>{ 
        this.setState({
          books:response.data.items,
          isLoading:false,
        })
    })
  }
  componentDidUpdate(previosProps){
    if (previosProps.categoryName !== this.props.categoryName){
      this.setState({
        isLoading:true,
      })
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.props.categoryName )
    // +"&key=AIzaSyBXi7_S9aeCMk-IoIHQPuZDeVdL-_XrNyw")
    .then((response)=>{ 
        this.setState({
          books:response.data.items,
          isLoading:false,
        })
    })
    }
  }
  render(){
    if(this.state.isLoading){
      return(<p>Loading....</p>)

    }else{
     
      return (          
        <div className="has-fixed-footer">
          <Header />
            <BooksSection title={this.props.categoryName} books={this.state.books}/>
    
          <Footer />
        </div>
      );
    }

  
   
};
}
BooksSectionPage.defaultProps={
    categoryName:"HTML",
}
export default BooksSectionPage;
