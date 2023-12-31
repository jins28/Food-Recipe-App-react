import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDeatils/BookDetails';



import {
  BrowserRouter , 
  Routes ,
  Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home />}>
        <Route path = "about" element= {<About />} />
        
        <Route path ="book" element= {<BookList />} />
        <Route path = "/book/:id" element = {<BookDetails />} />
      </Route>
    </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
