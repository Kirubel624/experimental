import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Book from "./pages/Book";
import MyCart from "./pages/MyCart";
import BookList from "./pages/BookList";
import Sel from './pages/Sell';
import Donate from './pages/Donation';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import { useContext, useState } from "react";
import { Context } from "./context/Context";

const App = ()=> {
  const { user, dispatch } = useContext(Context);
  return  (
 <Router>
  <ScrollToTop>
 <Routes>
   
   <Route exact path = "/" element={<Home/>} />
   <Route exact path = "/Books/:category" element={<BookList /> } />
   <Route exact path = "/Book/:id" element ={<Book />} />
   <Route exact path = "/MyCart" element={<MyCart />} />
   <Route exact path = "/Login" element={ <Login />}/> 
   <Route exact path = "/Register" element ={<Register />} />
   <Route exact path = "/Donation" element={ <Donate />}/> 
   <Route exact path = "/Sell" element ={<Sel/>} />
   
 </Routes>
 </ScrollToTop>
 </Router>
  );
  }

export default App;
