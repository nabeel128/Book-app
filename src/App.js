import React,{ Component } from 'react';
import BooksSectionPage from  "./pages/books-section";
import BookDetailPage from './pages/book-detail.js';
import {Switch,Route, BrowserRouter} from"react-router-dom";
import PageNotFound from './pages/page-not-found.js'; 

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={BooksSectionPage}/>
      <Route path="/books/:category/:categoryName" exact render={(props)=>{
        let{categoryName}=props.match.params; 
        return<BooksSectionPage categoryName={categoryName} />
      }}/>
      <Route path="/book/:bookID" render={(props)=>{
        let{bookID}= props.match.params;
        return <BookDetailPage bookID={bookID}/>
      }}/>      
      <Route component={PageNotFound}     />
    </Switch>
    </BrowserRouter>
  );
    }
}

export default App;
