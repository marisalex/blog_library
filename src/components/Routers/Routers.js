import React from "react"
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Story from "../Story/Story";
import BookStore from "../Bookstore/Bookstore";
import Checkout from "../Checkout/Checkout";
import booksData from "../../books"


function Router(){
  const newBook = booksData.map(book =>{
    return <BookStore 
       key = {book.id}
       book = {book}
    />
  })

  console.log(booksData)

  return(
    <div>
      <Navbar />

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/submit" element={<Story />} />
        <Route path="/shop" element={newBook} />
        <Route path ="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Router

    //  <Navbar darkMode={darkMode} 
    //           toggleDarkMode={toggleDarkMode}  />
    //           <Hero />
    //           <Main />
    //           <Footer  />